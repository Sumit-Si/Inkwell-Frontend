import axiosInstance from "@/api/axios"
import { AxiosError } from "axios"
import { data, type LoaderFunction } from "react-router-dom"


const blogDetailLoader: LoaderFunction = async ({params}) => {
    const {slug} = params;
    console.log("id",slug,"params",params);
    
    try {
        const { data } = await axiosInstance.get(`/posts/${slug}`);
        return data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw data(error.response?.data.message || error.message, {
                status: error.response?.status || error.status,
                statusText: error.response?.data.code || error.code,
            })
        }
        throw error;
    }
}

export default blogDetailLoader