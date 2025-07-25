# Portfolio With Svelte.

Vercel-like style portfolio template for developers.

## Libraries

The main libraries used here are :

- `shadcn-svelte` : component library.
- `tailwindcss` : css styling.
- `unocss` : fonts and icons.
  - using `carbon` (and thus the icon names `i-carbon-*`) icons that could be browsed [here](https://icones.js.org/collection/carbon)
- `mode-watcher` : color mode utility.
- `prismjs` : markdown parsing in combination with `marked`, `marked-mangle`, `marked-gfm-heading-id` and `dompurify`.

Adapt to your needs
If you want to use the template as it is, you can :
update files in src/lib/data with your data.

update src/lib/index.css for custom styling.

update src/lib/index.css for custom markdown styling.

update static/favicon.png to customize the tab's icon.

You can find shadcn-svelte component in src/lib/components/ui, other components are arranged by their page, or in the common folder.

But feel free to explore and hack the template to your needs if you feel like it.