import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Welcome to my portfolio! A passionate technology enthusiast and web developer with a strong drive for building modern, user-friendly web applications. Currently, I work in quality assurance testing for a crowdtesting platform, where I help ensure the functionality and reliability of digital products.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/MaurizioAba', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/maurizio-abaterusso-0586a47b/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Twitter', href: 'https://x.com/MaurizioAba', icon: 'i-carbon-logo-x' },
		{ label: 'Telegram', href: 'https://t.me/mauAba', icon: 'i-carbon-chat' },
		{ label: 'Email', href: 'mailto:maurizioabaterusso@gmail.com', icon: 'i-carbon-email' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
