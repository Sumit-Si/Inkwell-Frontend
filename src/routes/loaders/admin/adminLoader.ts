import axiosInstance from "@/api/axios";
import { AxiosError } from "axios";
import { data, useLoaderData } from "react-router-dom";

const adminLoader:useLoaderData = async () => {
    const accessToken = 
    console.log("accessToken", accessToken);
    
    try {

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

export default adminLoader