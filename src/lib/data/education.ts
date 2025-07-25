import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Epicode institute of technology - Data Analysis and Excel',
		description: 'Data Analysis and Excel',
		location: 'Online',
		logo: Assets.epicode,
		name: '',
		organization: 'Epicode',
		period: { from: new Date(2023, 9), to: new Date(2023, 10) },
		shortDescription: '',
		slug: 'dummy-education-item-1',
		subjects: [ 'Excel e Excel Avanzato', 'PowerQuery', 'Microsoft Power BI', 'Google Looker', 'Tableau']
	},
	{
		degree: 'Istituto tecnico superiore Kennedy (Alto Adriatico)',
		description: '',
		location: 'Pordenone',
		logo: Assets.kennedy,
		name: '',
		organization: 'ITS',
		period: { from: new Date(2013, 10, 1), to: new Date(2015, 6, 31) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['workshop in workgroups', 'website and application design', 'methodologies for managing the software development cycle', 'analysis and documentation', 'testing and deployment']
	},
	{
		degree: 'Istituto Tecnico Industriale Statale Informatico Falanto',
		description: '',
		location: 'Taranto, Italy',
		logo: Assets.falanto,
		name: '',
		organization: 'ITIS',
		period: { from: new Date(2005, 8), to: new Date(2010, 7) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['statistics-mathematics', 'computer science', 'system and telecommunications', 'algorithm', 'principles of electronics', 'algebra','C++']
	}
];

const EducationData = { title, items };

export default EducationData;
