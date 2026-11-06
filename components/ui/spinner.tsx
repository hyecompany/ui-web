// SPDX-FileCopyrightText: © 2026 Joseph Maldjian <joseph.maldjian@hyecompany.com>
// SPDX-License-Identifier: Apache-2.0

import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

type SpinnerProps = Omit<ComponentProps<"span">, "children"> & {
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
}

export function Spinner({
  size = "md",
  className,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-hidden": ariaHidden,
  ...props
}: SpinnerProps) {
  const hidden = ariaHidden === true || ariaHidden === "true"

  return (
    <span
      role="status"
      data-slot="spinner"
      aria-hidden={ariaHidden}
      aria-label={ariaLabel ?? (hidden || ariaLabelledBy ? undefined : "Loading")}
      aria-labelledby={ariaLabelledBy}
      className={cn("inline-flex shrink-0 opacity-80", sizes[size], className)}
      {...props}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-full"
      >
        <style>{`@keyframes hye-spinner-fade { 0%, 100% { opacity: 0.15; } 50% { opacity: 1; } } @media (prefers-reduced-motion: no-preference) { [data-hye-spinner-segment] { animation: hye-spinner-fade 800ms linear infinite; } }`}</style>
        {Array.from({ length: 8 }, (_, index) => (
          <rect
            key={index}
            x="10.5"
            y="0"
            width="3"
            height="7.2"
            rx="1.5"
            data-hye-spinner-segment=""
            opacity={(index + 1) / 8}
            style={{ animationDelay: `${-(7 - index) * 100}ms` }}
            transform={`rotate(${index * 45} 12 12)`}
          />
        ))}
      </svg>
    </span>
  )
}
