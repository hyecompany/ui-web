/* SPDX-SnippetBegin
SPDX-FileCopyrightText: Copyright (c) 2023 shadcn
SPDX-License-Identifier: MIT */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// SPDX-SnippetEnd
