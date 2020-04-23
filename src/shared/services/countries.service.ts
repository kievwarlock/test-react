import {ApiService} from "@/shared/services/api.service";

export const CountriesService = {
    async getAll() {
        return await ApiService.get("all");
    }
};