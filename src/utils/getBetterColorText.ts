const colours = {
	normal: '#000000',
	fire: '#000000',
	water: '#000000',
	electric: '#000000',
	grass: '#000000',
	ice: '#000000',
	fighting: '#FFFFFF',
	poison: '#FFFFFF',
	ground: '#000000',
	flying: '#000000',
	psychic: '#000000',
	bug: '#000000',
	rock: '#000000',
	ghost: '#FFFFFF',
	dragon: '#FFFFFF',
	dark: '#FFFFFF',
	steel: '#000000',
	fairy: '#000000',
};

// @ts-ignore
const getBetterColorText = (type: string): string => colours[type] || '#000000';
export default getBetterColorText;