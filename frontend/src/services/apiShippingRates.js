import axios from "axios";

const BASE_URL = "http://localhost:8080/api/shippings";

export async function getShippingRate(zipcode){
    const response = await axios({
        method:'get',
        url: `${BASE_URL}/zipcode/${zipcode}`
    })

    console.log(response.data)
    return response.data;
}