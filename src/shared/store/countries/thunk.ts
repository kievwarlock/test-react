import {Dispatch} from "redux";
import {DisableCountriesLoader, EnableCountriesLoader, LoadCountriesAction, ErrorLoadCountriesAction} from "./actions";
import {CountriesService} from "@/shared/services/countries.service";

export const LoadCountryActionAsync = () => (
    async (dispatch: Dispatch) => {
        try {
            dispatch(EnableCountriesLoader());
            const countries = await CountriesService.getAll();
            dispatch(LoadCountriesAction(countries));
            dispatch(DisableCountriesLoader());
        } catch (error) {
            dispatch(ErrorLoadCountriesAction(error));
        }
    }
);