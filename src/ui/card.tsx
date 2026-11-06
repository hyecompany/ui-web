// SPDX-FileCopyrightText: © 2026 Joseph Maldjian <joseph.maldjian@hyecompany.com>
// SPDX-License-Identifier: Apache-2.0
import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export function Card({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card" className={twMerge("rounded-xl border bg-card text-card-foreground shadow-sm", className)} {...props} />
}
export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-header" className={twMerge("space-y-1.5 p-6", className)} {...props} />
}
export function CardTitle({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-title" className={twMerge("font-semibold leading-none tracking-tight", className)} {...props} />
}
export function CardDescription({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-description" className={twMerge("text-sm text-muted-foreground", className)} {...props} />
}
export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-content" className={twMerge("px-6 pb-6", className)} {...props} />
}
