


const filterUrl = (url = '', search = "https://pokeapi.co/api/v2/"):string => {
    url = url.substring(0, url.length - 1); // remover / do final da url
    return url.replace(search, "")
}


export default filterUrl