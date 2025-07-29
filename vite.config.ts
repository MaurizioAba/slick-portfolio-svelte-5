import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
	base: '/slick-portfolio-svelte-5/',
	plugins: [sveltekit(), UnoCSS()]
});
