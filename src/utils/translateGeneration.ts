
interface igeneration {
    generation?:
        "generation-i" |
        "generation-ii" |
        "generation-iii" |
        "generation-vi" |
        "generation-v" |
        "generation-vi"
}

const generation = {
    "generation-i" : "Geração I",
    "generation-ii" : "Geração II",
    "generation-iii" : "Geração III",
    "generation-iv" : "Geração IV",
    "generation-v" : "Geração V",
    "generation-vi": "Geração VI"
};
// @ts-ignore
const getGeneration = (generation: string): string => generation[generation] || 'Geração I';
export default getGeneration;