import axios from "axios";

const BASE_URL = "http://localhost:8080/api/categories";

export async function getCategory(categoryName){

    const response = await axios({
        method:'get',
        url: `${BASE_URL}/${categoryName}`

    })

    return response.data;

}