import axiosInstance from "@/api/axios";
import type { ApiKeyData, loginData, UserData } from "@/types";

const authService = {
    register: async (userData: UserData) => {
        const response = await axiosInstance.post("/auth/register", userData);
        return response.data;
    },

    login: async (loginData: loginData) => {
        const response = await axiosInstance.post("/auth/login", loginData);
        return response.data;
    },

    getMe: async () => {
        const response = await axiosInstance.get("/auth/me");
        return response.data;
    },

    generateApiKey: async (apiKeyData: ApiKeyData) => {
        const response = await axiosInstance.post("/auth/api-key",apiKeyData);
        return response.data;
    },

    logout: async () => {
        const response = await axiosInstance.get("/auth/logout");
        return response.data;
    },
}

export default authService;