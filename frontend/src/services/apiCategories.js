import axios from "axios";

const BASE_URL = "http://localhost:8080/api/categories";

export async function getCategory(id){

    const response = await axios({
        method:'get',
        url: `${BASE_URL}/${id}`

    })

    return response.data;

}

export async function getProducts(categoryId){

    const response = await axios({
        method:'get',
        url:`${BASE_URL}/category/${categoryId}`
    })

    return response.data;
}