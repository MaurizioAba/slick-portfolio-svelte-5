import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'frontend-freelance',
		company: 'Self-employed',
		description: 'Front-end developer with web-based application maintenance development. Collaboration on a project involving automotive coding and retrofit services. Analysis, development, and testing of a Telegram bot, selection of car accessories, tools, and mechanical parts. Language: Python with the Amazon Affiliate program (https://programma-affiliazione.amazon.it/) use of the platform and a dedicated Telegram channel with API keys parameterized in the code. Content creator: I created an Instagram profile where I post content on technology, artificial intelligence, and current topics. The profile is @digital.doses',
		contract: ContractType.Freelance,
		type: 'Frontend Development',
		location: 'Home',
		period: { from: new Date(2023,0) },
		skills: getSkills('react', 'svelte', 'ts', 'css', 'html', 'js', 'reactjs', 'telegram', 'fastapi', 'docker', 'tailwind', 'python', 'numpy', 'pandas'),
		name: 'Fronted and tester developer',
		color: 'blue',
		links: [],
		logo: Assets.m,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'QA tester freelance',
		company: 'Tryber.me by Unguess',
		description: 'Crowd testing platform. Analyzed campaign requirements to share technical bugs, malfunctions, and usability feedback. Tested web and mobile applications such as bug hunting, website testing, and ethical hacking. I have successfully managed and completed 40 campaigns, addressing and resolving numerous bugs during maintenance and regression testing. I have currently achieved Platinum status with 14,545 experience points, and am constantly improving my skills.',
		contract: ContractType.Freelance,
		type: 'Frontend Development',
		location: 'Home',
		period: { from: new Date(2024,0) },
		skills: getSkills('ux', 'ui'),
		name: 'QA Tester',
		color: 'yellow',
		links: [],
		logo: Assets.tryber,
		shortDescription: 'Testing and quality assurance for the Tryber platform'
	},
	{
		slug: 'frontend-developer',
		company: 'Nextrek srl',
		description: 'Software/Web development company and information solutions. Multimedia, streaming, app Android, iOS and other platform/services.',
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Rome, Italy',
		period: { from: new Date(2016,0), to: new Date(2022,8) },
		skills: getSkills('css', 'html', 'js', 'sqlserver', 'c#', 'laravel', 'php', 'sass', 'bootstrap', 'vue'),
		name: 'Frontend Developer',
		color: 'green',
		links: [],
		logo: Assets.nextrek,
		shortDescription: 'Website and testing for customers.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
