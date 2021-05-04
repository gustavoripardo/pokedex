const images = {
    normal: '',
	fire: 'type-fire-badge-masters.png',
	water: 'type-water-badge-masters.png',
	electric: 'type-electric-badge-masters.png',
	grass: 'type-grass-badge-masters.png',
	ice: 'type-ice-badge-masters.png',
	fighting: 'type-fighting-badge-masters.png',
	poison: 'type-poison-badge-masters.png',
	ground: 'type-ground-badge-masters.png',
	flying: 'type-flying-badge-masters.png',
	psychic: 'type-psychic-badge-masters.png',
	bug: 'type-bug-badge-masters.png',
	rock: 'type-rock-badge-masters.png',
	ghost: 'type-ghost-badge-masters.png',
	dragon: 'type-dragon-badge-masters.png',
	dark: 'type-dark-badge-masters.png',
	steel: 'type-steel-badge-masters.png',
	fairy: 'type-fairy-badge-masters.png',
};
// @ts-ignore
const getImage = (type: string): string => images[type] || '';
export default getImage;