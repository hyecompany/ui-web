<!--
SPDX-FileCopyrightText: © 2026 Joseph Maldjian <joseph.maldjian@hyecompany.com>

SPDX-License-Identifier: Apache-2.0
-->

# Contributing to Hye UI Web

## Developer Contribution Agreement

<!-- SPDX-SnippetBegin -->
<!-- SPDX-SnippetCopyrightText: © 2026 Joseph Maldjian <joseph.maldjian@hyecompany.com> -->
<!-- SPDX-License-Identifier: LicenseRef-DCA -->

Copyright (C) 2026 Joseph Maldjian
You can share this document exactly as it is, but you cannot edit the text.

### Definitions

- **The Project License** refers to the [Apache License, Version 2.0](./LICENSE).
- **The DCO** refers to the [Developer Certificate of Origin, Version 1.1](./docs/contributing/DCO-1.1.txt).
- **The REUSE Specification** refers to the [REUSE Specification, Version 3.3](https://reuse.software/spec-3.3/).
- **Differential Contribution Part** refers to an identifiable portion of the contribution which purports to be licensed under a license other than The Project License.
- **Indicated License**, with respect to an identifiable portion of the contribution:
  - Where that portion is a Differential Contribution Part, refers to the license which it purports to be licensed under.
  - Otherwise, refers to The Project License.

### Differential Contribution Parts

Where the contribution contains a Differential Contribution Part, I:

- Agree to prominently disclose a list containing the Indicated License of each Differential Contribution Part at the beginning of my Pull Request description.
- Covenant that my contribution will comply with The REUSE Specification.
- Certify that, to the best of my knowledge, the Indicated License of every Differential Contribution Part is compatible with The Project License.
- Additionally grant to any individual or "Legal Entity" (as defined in Section 1 of The Project License):
  - Where I am a copyright holder of a Differential Contribution Part: a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license under the terms of its Indicated License.
  - Where I hold any patent claims licensable by me that are necessarily infringed by a Differential Contribution Part, alone or in combination with the project to which it was submitted: a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer that Differential Contribution Part, to the extent necessary to exercise the permissions granted under its Indicated License. If any holder granted a license through this agreement institutes patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the project or any contribution incorporated within it constitutes direct or contributory patent infringement, the patent license I granted to that holder under this agreement shall terminate as of the date such litigation is filed.

### Certification

I certify every identifiable portion of the contribution under The DCO, subject to the following:

- For the purposes of clause (a) of The DCO, the phrase "the open source license indicated in the file" shall be read as a reference to the Indicated License with respect to that identifiable portion.
- For the purposes of clause (b) of The DCO, references to the license "as indicated in the file" shall likewise read as references to the Indicated License with respect to that identifiable portion.

### Contribution License

I submit every identifiable portion of the contribution to this project under its respective Indicated License.

<!-- SPDX-SnippetEnd -->

## Signing The Developer Contribution Agreement

A sign-off, in the form of a `Signed-off-by: [Your Full Name] <[your primary email address]>` line included in the commit message (with the bracketed fields replaced by your own identifying information, and the brackets themselves omitted), constitutes your acceptance of, and agreement to be bound by, the Developer Contribution Agreement as defined in this document.

You can use `git commit -s` for convenience.

## Contributing Code Under a Different License

You're welcome to contribute code that's licensed differently from the rest of the project.

For more information, see the [REUSE Specification](https://reuse.software/spec-3.3/).

### 1. Confirm the license is acceptable

**Accepted:** permissive licenses like MIT, BSD (2-Clause or 3-Clause), ISC, and similar.

**Potentially Accepted:** MPL, CDDL, and EPL. These are weak-copyleft licenses. Unlike MIT or BSD, they carry a per-file share-alike obligation: modifications to that specific file must remain under the same license if distributed. Since the obligation is ongoing, these are always reviewed on a case-by-case basis.

**Not accepted, in any form:** GPL, LGPL, AGPL, or similar copyleft licenses. _This includes code you wrote after viewing or referencing a copyleft-licensed source_, even without copying it directly. Reimplementing similar logic after seeing copyleft code can still produce a derivative work under that code's license. If you've viewed copyleft-licensed code with the intent of implementing similar functionality here, don't submit that contribution.

If you're unsure which category a license falls under, ask before opening your PR. Licenses we've accepted before are present in `./LICENSES`.

### 2. Mark the Differential Contribution Parts

Find your license's SPDX identifier on the [SPDX License List](https://spdx.org/licenses/).

#### Commentable Files

If your part is a **new file**, add a comment header of the following form:

<!-- REUSE-IgnoreStart -->

```
SPDX-FileCopyrightText: 2026 First Last <email>

SPDX-License-Identifier: MIT
```

<!-- REUSE-IgnoreEnd -->

If your part is **within an already existing file**, license the part by enclosing it in comments of the following form:

<!-- REUSE-IgnoreStart -->

```
SPDX-SnippetBegin
SPDX-SnippetCopyrightText: 2026 First Last <email>
SPDX-License-Identifier: MIT

[part]

SPDX-SnippetEnd
```

<!-- REUSE-IgnoreEnd -->

#### Uncommentable Files

If your part is a uncommentable file, create a new file entitled the exact same name as the part's file name, with `.license` appended to it. For example, given `example.ts`, create `example.ts.license`.

Place the licensing information in this new file of the same form outlined in [**new file** of Commentable Files](#commentable-files).

### 3. Add the license to the repo

If the full text of that license isn't already in `LICENSES/`, create a new file there of form `[SPDX-License-Identifier].txt` (e.g. `MIT.txt`).

### 4. Disclose it in your Pull Request

At the beginning of your Pull Request description, list the licenses used in the contribution, e.g.:

```
**Differential Licenses:** MIT, ISC
```
