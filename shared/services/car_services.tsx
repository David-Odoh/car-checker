import axios from 'axios'

const BASE_URL = "https://api.staging.myautochek.com/v1"

export const Paths = {
    GET_BASE_INFO: `${BASE_URL}/inventory/`,
    GET_MAKES: `${BASE_URL}/inventory/make`,
    SEARCH_CARS: `${BASE_URL}/inventory/car/search`,
    CAR_MEDIA: `${BASE_URL}/inventory/car_media`,
}

export const getCarMakes = async () => {
    const initialData = await axios.get(
        `${Paths.GET_MAKES}?popular=true`
    )
        .then(({ data }) => {
            return data;
        })
    return initialData
}

export const getAllCars = async ({isRandomData, pageNum, pageSize}:any) => {
    const carsData = await axios.get(
        `${Paths.SEARCH_CARS}`,{
            params:{
                page_number: pageNum||1,
                page_size: pageSize||25
            }
        }
    )
        .then(({ data }) => {
            let mainData = data;
            if(isRandomData){
                return {
                    mainData,
                    selectedData: data.result.slice(0, 5)
                };
            }
            return data;
        })
    return carsData;
}

export const getCar = async (carId:string) => {
    
    const carsData = await axios.get(
        `${Paths.GET_BASE_INFO}car/${carId}`
    )
        .then(({ data }) => {
            
            return data;
        })
    return carsData;
}

export const getCarMedia = async (carId:string) => {
    
    const carsData = await axios.get(
        `${Paths.GET_BASE_INFO}car_media?carId=${carId}`
    )
    .then(({ data }) => {
        return data;
    })
    return carsData;
}