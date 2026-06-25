import { cn } from "@/lib/utils";

/** The small uppercase JetBrains-Mono eyebrow above section headings. */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-label-sm text-primary block font-mono tracking-widest uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
