import { cn } from "@/lib/utils";

/** Centered 1280px content column with the design's responsive gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "px-margin-mobile md:px-margin-desktop mx-auto w-full",
        className,
      )}
    >
      {children}
    </div>
  );
}
