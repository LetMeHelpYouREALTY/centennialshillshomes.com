import Image from "next/image";
import { agentInfo, siteImages } from "@/lib/site-config";

const sizeClass = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-28 w-28 md:h-36 md:w-36",
  xl: "h-40 w-40 md:h-56 md:w-56",
} as const;

type AgentPortraitProps = {
  size?: keyof typeof sizeClass;
  className?: string;
  priority?: boolean;
  /** Hide the name from the image when adjacent text already names Dr. Jan. */
  decorative?: boolean;
};

export default function AgentPortrait({
  size = "md",
  className = "",
  priority = false,
  decorative = false,
}: AgentPortraitProps) {
  return (
    <Image
      src={siteImages.agentPortrait}
      alt={
        decorative
          ? ""
          : `${agentInfo.name}, ${agentInfo.title}, ${agentInfo.brokerage}`
      }
      width={320}
      height={320}
      priority={priority}
      className={`aspect-square shrink-0 rounded-full object-cover ${sizeClass[size]} ${className}`}
    />
  );
}
