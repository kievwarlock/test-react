import "./home-page.component.scss"
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {LoadCountryActionAsync} from "@/shared/store/countries/thunk";
import {CountrySelector} from "@/shared/components/country-selector.component";
import {PaymentForm} from "@/shared/components/payment-form.component";
import {ApplicationState} from "@/shared/store";
import {CountriesStateType} from "@/shared/store/countries/types";
import {sanctionedCountriesList} from "@/shared/mock/sanctioned-countries-list";


export const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const {countries, loading: isCountriesLoaded, error: errorCountriesLoad} = useSelector<ApplicationState, CountriesStateType>(state => state.countries);

    const [selectedCountry, setSelectedCountry] = React.useState("");
    const [isSanctionedCountry, setIsSanctionedCountry] = React.useState(false);

    React.useEffect( () => {
        if(selectedCountry){
            const result = sanctionedCountriesList.find((country) => country.alpha2Code === selectedCountry);
            setIsSanctionedCountry( !!result);
        }
    }, [selectedCountry]);


    React.useEffect(() => {
        dispatch(LoadCountryActionAsync());
    }, []);

    return (
        <div className="home-page">
            {errorCountriesLoad && (
                <div>Error...please try again later</div>
            )}
            <h1 className="home-page__title">React test app</h1>
            {isCountriesLoaded
                ? (
                    <div>
                        <CountrySelector
                            countries={countries}
                            onChange={setSelectedCountry}
                        />
                        {isSanctionedCountry ? <PaymentForm/> : "We are sorry, the service is not supported at the moment."}
                    </div>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    );
};