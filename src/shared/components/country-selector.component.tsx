import "./country-selector.component.scss"
import * as React from "react";
import {CommonProps} from "@/shared/types/types";
import {classes} from "@/shared/utils/utils";
import {CountryType} from "@/shared/store/countries/types";
import {Select, SelectValue} from "@/shared/components/form/select.component";

export type CountrySelectorType = CommonProps & {
    countries: CountryType[];
    onChange?: (code: string) => void;
}

export const CountrySelector: React.FC<CountrySelectorType> = (
    {
        countries,
        onChange,
        ...CommonProps
    }) => {

    const classNames = classes("country-selector", CommonProps.className);
    const [selectedCountry, setSelectedCountry] = React.useState(countries[0].alpha2Code);

    const formatCountriesData = countries.reduce((acc: SelectValue[], value: CountryType) => [...acc, {
        text: value.name,
        value: value.alpha2Code
    }], []);


    React.useEffect(() => {
        if(onChange){
            onChange(selectedCountry);
        }
    }, [selectedCountry])

    return (
        <div className={classNames}>
            <div className="country-selector__title">Country selector</div>
            <Select
                onChange={setSelectedCountry}
                selected={selectedCountry}
                value={formatCountriesData}
            />
        </div>
    )
};

