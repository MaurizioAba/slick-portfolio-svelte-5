const firstName = 'Maurizio';
const lastName = 'Abaterusso';
const suffix = 'Portfolio with Svelte 5';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
