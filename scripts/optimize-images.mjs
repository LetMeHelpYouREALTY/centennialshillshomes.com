import { readdir, rename, stat, unlink } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));

const presets = {
	"dr-jan-duffy-luxury-real-estate.jpg": { width: 640, quality: 82 },
	default: { width: 720, quality: 78 },
};

const logoOg = { width: 512, quality: 80 };

async function optimizeJpeg(filePath, { width, quality }) {
	const input = sharp(filePath);
	const meta = await input.metadata();
	if (!meta.width || meta.width <= width) {
		await input.jpeg({ quality, mozjpeg: true }).toFile(`${filePath}.tmp`);
	} else {
		await input
			.resize({ width, withoutEnlargement: true })
			.jpeg({ quality, mozjpeg: true })
			.toFile(`${filePath}.tmp`);
	}
	await unlink(filePath);
	await rename(`${filePath}.tmp`, filePath);
}

const mediaDir = join(root, "public", "media");
const files = await readdir(mediaDir);

for (const name of files) {
	if (!name.endsWith(".jpg")) continue;
	const preset = presets[name] ?? presets.default;
	const path = join(mediaDir, name);
	const before = await stat(path);
	await optimizeJpeg(path, preset);
	const after = await stat(path);
	console.log(
		`${name}: ${Math.round(before.size / 1024)}KB → ${Math.round(after.size / 1024)}KB`,
	);
}

for (const name of ["logo.png", "og-image.jpg"]) {
	const path = join(root, "public", name);
	const before = await stat(path);
	if (name.endsWith(".png")) {
		await sharp(path)
			.resize({ width: logoOg.width, withoutEnlargement: true })
			.png({ quality: 85, compressionLevel: 9 })
			.toFile(`${path}.tmp`);
	} else {
		await sharp(path)
			.resize({ width: logoOg.width, withoutEnlargement: true })
			.jpeg({ quality: logoOg.quality, mozjpeg: true })
			.toFile(`${path}.tmp`);
	}
	await unlink(path);
	await rename(`${path}.tmp`, path);
	const after = await stat(path);
	console.log(
		`${name}: ${Math.round(before.size / 1024)}KB → ${Math.round(after.size / 1024)}KB`,
	);
}
