import Axios from 'axios'

const api = Axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    // https://pokeres.bastionbot.org/images/pokemon/1.png
    // https://www.pkmnapi.com/endpoints/icons/
});

export default api