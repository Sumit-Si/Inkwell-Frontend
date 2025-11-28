import axiosInstance from "@/api/axios";
import type { PaginatedResponse } from "@/types";
import { AxiosError } from "axios";
import { data, type LoaderFunction } from "react-router-dom"

const userPostLoader: LoaderFunction = async ({request}) => {
    const url = new URL(request.url);
    console.log("url",url);

    try {
        const response = await axiosInstance.get("/posts", {
            params: Object.fromEntries(url.searchParams),
        });

        const data = response.data as PaginatedResponse<"Posts">;

        return data;
    } catch (error) {
        if(error instanceof AxiosError) {
            throw data(error.response?.data.message || error.message, {
                status: error.response?.status || error.status,
                statusText: error.response?.data.code || error.code,
            })
        }
        throw error;
    }
    
}

export default userPostLoader