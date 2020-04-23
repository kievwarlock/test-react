import {CountryActions, CountryType} from "./types";

export type LoadCountriesActionType = {
    type: CountryActions.LOAD_LIST_COUNTIES;
    countries: CountryType[];
}

export const LoadCountriesAction = (countries: CountryType[]): LoadCountriesActionType => ({
    type: CountryActions.LOAD_LIST_COUNTIES,
    countries
});

export type ErrorLoadCountriesActionType = {
    type: CountryActions.ERROR_LOAD_LIST_COUNTIES;
    error: any;
}

export const ErrorLoadCountriesAction = (error: any): ErrorLoadCountriesActionType => ({
    type: CountryActions.ERROR_LOAD_LIST_COUNTIES,
    error
});

export type CountriesLoaderType = {
    type: CountryActions.DISABLE_COUNTRY_LOADER | CountryActions.ENABLE_COUNTRY_LOADER;
}

export const  EnableCountriesLoader= (): CountriesLoaderType => ({
    type: CountryActions.ENABLE_COUNTRY_LOADER
});

export const  DisableCountriesLoader= (): CountriesLoaderType => ({
    type: CountryActions.DISABLE_COUNTRY_LOADER
});