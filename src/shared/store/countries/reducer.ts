import {Reducer} from "redux"
import {ActionTypes, CountriesStateType, CountryActions} from "./types";

const initialState: CountriesStateType = {
    countries: [],
    loading: false,
    error: null
};

export const countries: Reducer<CountriesStateType> = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case CountryActions.LOAD_LIST_COUNTIES:
            return {
                ...state,
                countries: action.countries
            };
        case CountryActions.ERROR_LOAD_LIST_COUNTIES:
            return {
                ...state,
                error: action.error
            };
        case CountryActions.ENABLE_COUNTRY_LOADER:
            return {
                ...state,
                loading: false
            };
        case CountryActions.DISABLE_COUNTRY_LOADER:
            return {
                ...state,
                loading: true
            };
        default:
            return {
                ...state
            };
    }
};