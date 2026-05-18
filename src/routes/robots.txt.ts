import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (ev) => {
	const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.centennialhillshomesforsale.com/sitemap.xml

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /private/

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Crawl delay (optional)
Crawl-delay: 1`;

	const response = new Response(robotsTxt, {
		status: 200,
		headers: { "Content-Type": "text/plain" },
	});

	ev.send(response);
};
