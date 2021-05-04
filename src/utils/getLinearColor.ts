const colours = {
	normal: ['#A8A77A', '#22c1c3'],
	fire: ['#EE8130', '#5842d1'],
	water: ['#6390F0', '#42e4a7'],
	electric: ['#F7D02C', '#63f0b1'],
	grass: ['#7AC74C', '#006cff'],
	ice: ['#96D9D6', '#2a8cb1'],
	fighting: ['#C22E28', '#6a00ff'],
	poison: ['#A33EA1', '#0052ff'],
	ground: ['#E2BF65', '#ff0000'],
	flying: ['#A98FF3', '#3b00ff'],
	psychic: ['#F95587', '#da00ff'],
	bug: ['#A6B91A', '#00ffcd'],
	rock: ['#B6A136', '#00e4ff'],
	ghost: ['#735797', '#00fff8'],
	dragon: ['#6F35FC', '#ff0000'],
	dark: ['#705746', '#e97337'],
	steel: ['#B7B7CE', '#377ce9'],
	fairy: ['#D685AD', '#3764e9'],
};

// @ts-ignore
const getLinearColor = (type: string): array => colours[type] || ['#A8A77A', '#22c1c3'];
export default getLinearColor;