// SPDX-FileCopyrightText: © 2026 Joseph Maldjian <joseph.maldjian@hyecompany.com>
// SPDX-License-Identifier: Apache-2.0
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function Button({ className, ...props }: ButtonPrimitive.Props) {
  return <ButtonPrimitive data-slot="button" className={twMerge(clsx("inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", className))} {...props} />
}
