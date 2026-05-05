import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border-card bg-bg-card/50 px-3 py-1 text-xs font-mono text-orange-primary backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
