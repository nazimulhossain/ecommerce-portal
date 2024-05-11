import axios from "axios";

const BASE_URL = "http://localhost:3000/products";

export async function getproducts(){
    const response = await axios({
        method: "get",
        url : BASE_URL
    })

   
    return response.data;
}

export async function getProduct(id){
    const response = await axios({
        method: 'get',
        url: `${BASE_URL}/${id}`
    })
    
    return response.data;
}