import {createStore, combineReducers, Store, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {CountriesStateType} from "./countries/types"
import {countries} from "./countries/reducer"


export type ApplicationState = {
    countries: CountriesStateType;
}

export type ApplicationReducersType = {
    countries: typeof countries;
}

export const rootReducers = combineReducers<ApplicationReducersType>( {
    countries: countries,
});

export const store: Store<ApplicationState> = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);