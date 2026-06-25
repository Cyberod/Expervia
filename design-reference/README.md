# Design Reference

This folder holds the raw design exports (Google Stitch) used as a **reference**
while building pages. Nothing here is part of the application bundle.

## How to add a design

For each page, drop a subfolder here named after the page, e.g.:

```
design-reference/
├── homepage/
│   ├── screenshot.png      # the visual reference (PNG/JPEG)
│   └── code/               # the unzipped Stitch HTML/CSS + assets
└── about/
    ├── screenshot.png
    └── code/
```

- **screenshot** → shows the intended visual result at a glance.
- **code/** → the unzipped Stitch export; used to read exact colors,
  spacing, and font sizes. Not copied into the app directly.

Real assets that ship with the app (logos, hero images) go in `/public`,
not here.
