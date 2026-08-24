import { CONTENT_LAST_UPDATED_DATETIME, CONTENT_LAST_UPDATED_LABEL } from "@/lib/content-freshness";

interface PageLastUpdatedProps {
  className?: string;
  note?: string;
}

export default function PageLastUpdated({
  className = "text-center text-sm text-slate-500 mt-8",
  note,
}: PageLastUpdatedProps) {
  return (
    <p className={className}>
      Last Updated:{" "}
      <time dateTime={CONTENT_LAST_UPDATED_DATETIME}>{CONTENT_LAST_UPDATED_LABEL}</time>
      {note ? ` ${note}` : ""}
    </p>
  );
}
