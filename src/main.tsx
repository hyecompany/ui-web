// SPDX-FileCopyrightText: © 2026 Joseph Maldjian <joseph.maldjian@hyecompany.com>
// SPDX-License-Identifier: Apache-2.0
import { createRoot } from "react-dom/client"
import { Spinner } from "../components/ui/spinner"
import { OverflowText } from "../components/ui/overflow-text"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import "./styles.css"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b"><div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6"><a href="#" className="font-semibold">Hye UI Web</a><a className="text-sm text-muted-foreground hover:text-foreground" href="https://github.com/hyecompany/ui-web">GitHub ↗</a></div></header>
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8"><h1 className="text-3xl font-semibold tracking-tight">Components</h1><p className="mt-2 text-muted-foreground">Demos of components in the Hye UI Web registry.</p></div>
        <section id="spinner" className="space-y-5">
          <div><h2 className="text-2xl font-semibold tracking-tight">Spinner</h2><p className="mt-1 text-sm text-muted-foreground">An indicator for loading states.</p></div>
          <Card><CardHeader><CardTitle>Preview</CardTitle><CardDescription>Spinner sizes and colors.</CardDescription></CardHeader><CardContent><div className="flex min-h-36 flex-wrap items-center justify-center gap-10 rounded-lg border bg-muted/30 p-8"><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /><Spinner size="lg" className="text-blue-600" /></div></CardContent></Card>
          <Card><CardHeader><CardTitle>Button</CardTitle><CardDescription>A spinner alongside a loading label.</CardDescription></CardHeader><CardContent><div className="flex min-h-28 items-center justify-center rounded-lg border bg-muted/30 p-8"><Button disabled><Spinner size="sm" aria-hidden="true" /> Please wait</Button></div></CardContent></Card>
          <Card><CardHeader><CardTitle>Installation</CardTitle><CardDescription>Add the component to your shadcn project.</CardDescription></CardHeader><CardContent><pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm"><code>npx shadcn@latest add hyecompany/ui-web/spinner</code></pre></CardContent></Card>
        </section>
        <section id="overflow-text" className="mt-12 space-y-5">
          <div><h2 className="text-2xl font-semibold tracking-tight">Overflow Text</h2><p className="mt-1 text-sm text-muted-foreground">Middle-truncated text that scrolls on hover or focus.</p></div>
          <Card><CardHeader><CardTitle>Preview</CardTitle><CardDescription>Hover or focus the button to reveal the full text.</CardDescription></CardHeader><CardContent><div className="flex min-h-28 items-center justify-center rounded-lg border bg-muted/30 p-8"><Button className="group/overflow w-52"><OverflowText text="a-very-long-filename-with-important-details.tar.gz" /></Button></div></CardContent></Card>
          <Card><CardHeader><CardTitle>Installation</CardTitle></CardHeader><CardContent><pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm"><code>npx shadcn@latest add hyecompany/ui-web/overflow-text</code></pre></CardContent></Card>
        </section>
      </main>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<App />)
