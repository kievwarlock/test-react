import * as actions from "./actions";

export enum CountryActions {
    LOAD_LIST_COUNTIES = "LoadCountries",
    ERROR_LOAD_LIST_COUNTIES = "ErrorLoadCountries",
    ENABLE_COUNTRY_LOADER = "EnableCountryLoader",
    DISABLE_COUNTRY_LOADER = "DisableCountryLoader"
}

export type CountryType = {
    name: string;
    alpha2Code: string;
}
export type CountriesStateType = {
    countries: CountryType[];
    loading: boolean;
    error: string;
}

export type InferValue<T> = T extends { [key: string]: infer U} ? U : never;

export type ActionTypes = ReturnType<InferValue<typeof actions>>;