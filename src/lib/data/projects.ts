import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'N8N - Workflow',
		color: '#c300ffff',
		description:
			'Modular system of AI agents on n8n, integrated with Telegram, for participatory management of events, urban reporting and civic interaction. https://github.com/lascuolaopensource/bca-n8n-workflow',
		shortDescription:
			'Project open source. An n8n-like workflow automation platform for building and running custom automations.',
		links: [{ to: 'https://github.com/lascuolaopensource/bca-n8n-workflow', label: 'GitHub' }],
		logo: Assets.n8n,
		name: 'n8n Workflow',
		period: {
			from: new Date(2025, 6, 8), to: new Date(2025, 6, 17),
		},
		skills: getSkills('n8n'),
		type: 'AI Automation',
		screenshots: [
			{
				label: 'screen 1',
				src:'${import.meta.env.BASE_URL}screenshots/n8n_workflow.png'
			},
		]
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/MaurizioAba/slick-portfolio-svelte-5', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Portfolio',
		period: {
			from: new Date(2025, 6),
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'CustomPhotoCase',
		color: '#00ff2aff',
		description:
			'E-commerce to customize the cover on smartphone. Inspired by another project. developer website template made with Typescript and authentication using Kinde.',
		shortDescription:
			'Website, landing page with Typescript.',
		links: [{ to: 'https://github.com/MaurizioAba/CustomPhotoCase', label: 'GitHub' }],
		logo: Assets.snapphoto,
		name: 'SnapPhoto',
		period: {
			from: new Date(2024, 1), to: new Date(2024, 3),
		},
		skills: getSkills('ts', 'tailwind', 'sass'),
		type: 'Website Template'
	},
	{
		slug: 'Amazon-TelegramBot',
		color: '#f6ff00ff',
		description:
			'A Telegram bot that monitors Amazon for the best deals and automatically shares them to your channel. It focuses primarily on categories such as automotive, motorcycles, power tools, mechanic equipment, and tech accessories related to the world of mobility. 🚗 🏍️ 🔧 🔋',
		shortDescription:
			'Telegram bot that monitors Amazon for the best deals. Python',
		links: [{ to: 'https://github.com/MaurizioAba/Amazon-TelegramBot', label: 'GitHub' }],
		logo: Assets.dgarage,
		name: 'DG amazon-TelegramBot',
		period: {
			from: new Date(2023, 6),
		},
		skills: getSkills('python', 'telegram'),
		type: 'Telegram Bot',
	}
	
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
