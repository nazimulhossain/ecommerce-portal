import axios from "axios";

const BASE_URL = "http://localhost:3000/shipping";

export async function getShippingRate(zipcode){
    const response = await axios({
        method:'get',
        url: `${BASE_URL}/${zipcode}`
    })

    return response.data;
}