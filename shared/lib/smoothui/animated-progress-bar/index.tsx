"use client";

import { motion } from "motion/react";

export type AnimatedProgressBarProps = {
  value: number;
  label?: string;
  color?: string;
  className?: string;
  barClassName?: string;
  labelClassName?: string;
  showValue?: boolean;
};

const MIN_PROGRESS_VALUE = 0;
const MAX_PROGRESS_VALUE = 100;

export default function AnimatedProgressBar({
  value,
  label,
  color = "#6366f1",
  className = "",
  barClassName = "",
  labelClassName = "",
  showValue = false,
}: AnimatedProgressBarProps) {
  const clampedValue = Math.max(
    MIN_PROGRESS_VALUE,
    Math.min(MAX_PROGRESS_VALUE, value)
  );

  const displayLabel = label || (showValue ? `${clampedValue}%` : "");

  return (
    <div className={`w-full ${className}`}>
      <div className="relative h-5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          animate={{ width: `${clampedValue}%` }}
          className={`h-full rounded-full ${barClassName}`}
          initial={{ width: MIN_PROGRESS_VALUE }}
          style={{ backgroundColor: color }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 90,
            mass: 1,
          }}
        />

        {displayLabel && (
          <div
            className={`absolute inset-0 flex items-center justify-center
              text-[10px] whitespace-nowrap
              text-foreground drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]
              ${labelClassName}`}
          >
            {displayLabel}
          </div>
        )}
      </div>
    </div>
  );
}
