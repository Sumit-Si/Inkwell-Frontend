import { data } from "react-router-dom";
import type { LoaderFunction } from "react-router-dom";
// import type { Blog, PaginatedResponse } from "@/types";
import { AxiosError } from "axios";
import axiosInstance from "@/api/axios";
import type { PaginatedResponse, Posts } from "@/types";

export interface HomeLoaderResponse {
    recentPosts: PaginatedResponse<Posts>,
    allPosts: PaginatedResponse<Posts>,
}

const homeLoader: LoaderFunction = async () => {
    try {
        const {data: recentPosts } = await axiosInstance.get('/posts', {
            params: {limit: 4},
        });

        const {data: allPosts} = await axiosInstance.get('/posts', {
            params: {
                offset: 4,
                limit: 12,
            }
        });

        return {recentPosts, allPosts} as HomeLoaderResponse;
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

export default homeLoader;