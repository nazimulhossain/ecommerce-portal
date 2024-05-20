import axios from "axios";

const BASE_URL = "http://localhost:8080/api/products";


export async function getProduct(id){
    const response = await axios({
        method: 'get',
        url: `${BASE_URL}/id/${id}`
    })
    
    return response.data;
}