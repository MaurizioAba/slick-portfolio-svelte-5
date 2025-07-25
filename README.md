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


# 🚀 Deploying to GitHub Pages
🛠 Prerequisites
1. Enable GitHub Actions (for forks only)
If you've forked this repository, GitHub disables workflows by default.
To activate them:

Go to the Actions tab in your repository

Click the green button that says:

I understand my workflows, go ahead and enable them
This will allow automated deploys via GitHub Actions.

2. Allow GitHub Actions to publish GitHub Pages
Check that your repository allows GitHub Actions to manage GitHub Pages:

Go to Settings > Actions > General

Under Actions permissions, make sure
Allow all actions and reusable workflows is enabled

# ⚙️ Configure svelte.config.js
SvelteKit requires you to define a base path for GitHub Pages.

Inside your svelte.config.js, make sure the base value reflects your repository name:


const base = '/your-repo-name';
For example:

const base = '/slick-portfolio-svelte';
Special case: personal GitHub Pages
If your repository is named exactly like your GitHub username (e.g. yourusername.github.io),
set the base path to an empty string:


const base = '';
This tells SvelteKit to publish at the root level.

# 🚀 Deploying your project
If you've just updated the svelte.config.js, be sure to commit and push the changes.

Otherwise, you can trigger the deployment workflow with an empty commit:

git commit --allow-empty -m "chore: trigger deploy"
git push
Once pushed, go to the Actions tab and wait for the Build and Deploy workflow to complete.
You should see a green checkmark ✅ once it finishes.

🌐 Set up GitHub Pages
Go to Settings > Pages

Under Source, select:

Branch: gh-pages

Folder: / (root)

Click Save

GitHub will now serve your site from the gh-pages branch.

# ✅ Final check
After a few moments, GitHub will start the deployment.

Back in the Actions tab, make sure the pages-build-deployment workflow ran successfully.
If not, you can try pushing again:


git commit --allow-empty -m "chore: retry deploy"
git push
🌍 Your site will be available at
https://<your-username>.github.io/<your-repo-name>/


# 🛠 Customize the Template
You can easily tailor this template to match your project by updating the following files and folders:

## Content
Replace the sample data in src/lib/data with your own content (e.g. projects, skills, social links, etc.).

## Styling
Customize global styles in src/lib/index.css, including variables and layout rules.
For markdown-specific styles, edit the same file accordingly.

## Favicon
Replace the icon at static/favicon.png to personalize the browser tab icon.

## Components
UI components from shadcn-svelte are located in src/lib/components/ui.
Page-specific or shared components can be found in their corresponding folders (e.g. common or page-specific directories).
Feel free to explore, extend, or refactor the template however you like — it's meant to be a flexible starting point for your project.
