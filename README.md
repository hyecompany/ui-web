<!--
SPDX-FileCopyrightText: © 2026 Joseph Maldjian <joseph.maldjian@hyecompany.com>
SPDX-License-Identifier: Apache-2.0
-->

# Hye UI Web

A collection of components distributed through a GitHub-hosted shadcn registry.

## Using the registry

List the available items:

```sh
npx shadcn@latest list hyecompany/ui-web
```

Install an item in a project configured for shadcn:

```sh
npx shadcn@latest add hyecompany/ui-web/<item>
```

For example:

```sh
npx shadcn@latest add hyecompany/ui-web/spinner
```

These commands use the repository's default branch. New and updated items become available after their changes are published there. See [registry.json](./registry.json) for the item definitions.

## Development

Run the component demo locally:

```sh
npm install
npm run dev
```

After making changes, validate the local registry and type-check its components:

```sh
npm run validate
npm run typecheck
```
