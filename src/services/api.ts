import axios from 'axios'

// json-server --watch db.json  colocar para poder carregar os produtos
export const api= axios.create({
    baseURL:"http://localhost:3000/produtos"
});