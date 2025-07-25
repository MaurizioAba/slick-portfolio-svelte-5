import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 
			'JavaScript (JS) is a lightweight, interpreted (or just-in-time compiled) programming language with first-class features. While its best known as a web page scripting language, many non-browser environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a dynamic, multiparadigm, single-threaded, prototype-based language that supports object-oriented, imperative, and declarative styles (e.g., functional programming). Its impressive, but do you know what s also impressive? Shooting yourself in the foot by writing code with this language: 11 + 1; // 111 : thats right, string concatenation! 11 - 1; // 10 : why??? Seriously, I enjoyed learning this strange language. I enjoyed creating interactive websites, first using only JavaScript, then React and Svelte. Some learning steps are more tortuous than others because you have to become aware of whats actually happening internally. Lets just say Im not your average developer.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). Multiple options are available for transpilation. The default TypeScript Compiler can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS (Cascading Style Sheets) is a styling language used to control the visual presentation of web pages. I have experience building responsive layouts using Flexbox and CSS Grid, implementing animations, and maintaining consistent design systems across modern web applications.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML (HyperText Markup Language) is the standard language used to structure content on the web. I use semantic HTML to build accessible, well-structured web pages, ensuring compatibility across devices and seamless integration with CSS and JavaScript for dynamic interfaces.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor that adds powerful features like variables, nesting, mixins, and functions to streamline and scale stylesheet development. I use Sass to write modular and maintainable CSS, improving code organization and reusability in complex web projects.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelteMd,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'SqlServer',
		color: 'red',
		description:
			'Microsoft SQL Server is a relational database management system used for storing, retrieving, and managing data. I have worked with SQL Server to design relational schemas, write complex queries, develop stored procedures, and ensure data integrity and performance optimization in enterprise-level applications.',
		logo: Assets.sqlserver,
		name: 'sqlserver',
		category: 'db'
	}),
	defineSkill({
		slug: 'NodeJs',
		color: 'green',
		description:
			'Node.js is a JavaScript runtime built on Chrome’s V8 engine, used to develop fast and scalable server-side applications. I use Node.js to create RESTful APIs, handle asynchronous operations, and build efficient backend services for web applications.',
		logo: Assets.NodeJs,
		name: 'Node Js',
		category: 'server'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description:
			'I use Python to build efficient, scalable scripts and backend services, including Telegram bots. With the help of libraries like python-telegram-bot, I automate tasks, create custom chat commands, and integrate APIs to deliver real-time information and services directly to Telegram users.',
		logo: Assets.python,
		name: 'python',
		category: 'server'
	}),
	defineSkill({
		slug: 'telegram',
		color: 'blue',
		description:
			'I design and develop custom Telegram bots using Python, enabling automated interactions, real-time notifications, and seamless API integrations. My bots handle tasks such as content delivery, data tracking, user commands, and chat moderation, offering reliable tools for channels, groups, and personal use.',
		logo: Assets.telegram,
		name: 'telegram',
		category: 'communication'
	}),
	
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
