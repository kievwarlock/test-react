import "./payment-form.component.scss"
import * as React from "react";
import {CommonProps} from "@/shared/types/types";
import {classes} from "@/shared/utils/utils";
import {Input} from "@/shared/components/form/input.component";
import {Button} from "@/shared/components/form/button.component";

export type PaymentFormType = CommonProps & {
    onSubmit?: () => void;
}

export type PaymentFormDataType = {
    name?: string;
    number?: string;
    expirationDate?: string;
    cvv?: string;
}

export type PaymentFormDataValidationType = {
    name?: boolean;
    number?: boolean;
    expirationDate?: boolean;
    cvv?: boolean;
}

export const PaymentForm: React.FC<PaymentFormType> = (
    {
        children,
        onSubmit,
        ...CommonProps
    }) => {
    const classNames = classes("payment-form", CommonProps.className);

    const [formState, setFormState] = React.useState<PaymentFormDataType>({
        name: "",
        number: "",
        expirationDate: "",
        cvv: ""
    });
    const [isFormSubmit, setIsFormSubmit] = React.useState(false);
    const [formValidation, setFormValidation] = React.useState<PaymentFormDataValidationType>({
        name: true,
        number: true,
        expirationDate: true,
        cvv: true
    });

    const {name, number, expirationDate, cvv}: PaymentFormDataType = formState;

    const cardNameValidation = (value: string): boolean => !!value.match("^(?:[A-Za-z]+ ?){1,3}$");
    const cardNumberValidation = (value: string): boolean => !!value.match("^(\\d{4}-){3}\\d{4}$|^(\\d{4} ){3}\\d{4}$|^\\d{16}$");
    const cardExpDateValidation = (value: string): boolean => !!value.match("^((0[1-9])|(1[0-2]))\\/(\\d{2})$");
    const cardCvvValidation = (value: string): boolean => !!value.match("^([0-9]{3,4})$");

    const validationForm = () => {
        let formValidationData = {} as PaymentFormDataValidationType;
        let totalValid = true;
        formValidationData.name = cardNameValidation(formState.name);
        formValidationData.number = cardNumberValidation(formState.number);
        formValidationData.expirationDate = cardExpDateValidation(formState.expirationDate);
        formValidationData.cvv = cardCvvValidation(formState.cvv);

        setFormValidation(() => formValidationData);

        Object.values(formValidationData).forEach((value) => {
            if (value === false) {
                totalValid = false;
            }
        });

        return totalValid;
    };

    const clearData = () => {
        setFormState({
            name: "",
            number: "",
            expirationDate: "",
            cvv: ""
        });
        setFormValidation({
            name: true,
            number: true,
            expirationDate: true,
            cvv: true
        });
        setIsFormSubmit(false);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        validationForm();
        if (validationForm()) {
            setIsFormSubmit(true);
        }
    };

    return (
        <div className={classNames}>
            {isFormSubmit ? (
                <div>
                    <div>
                        Payment is successful
                    </div>
                    <Button onClick={clearData}>
                        Try again
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="payment-form__form-group">
                        <label htmlFor="credit-card-number">credit card holder name</label>
                        <Input
                            id="holder-name"
                            placeholder="John Smith"
                            validation={formValidation.name}
                            value={name}
                            onChange={value => setFormState({...formState, name: value})}
                        />
                    </div>
                    <div className="payment-form__form-group">
                        <label htmlFor="card-number">credit card number</label>
                        <Input
                            id="card-number"
                            placeholder="0000-0000-0000-0000"
                            validation={formValidation.number}
                            value={number}
                            onChange={value => setFormState({...formState, number: value})}
                        />
                    </div>
                    <div className="payment-form__form-group">
                        <label htmlFor="expiration-date">expiration date</label>
                        <Input
                            id="expiration-date"
                            placeholder="MM/YY"
                            value={expirationDate}
                            validation={formValidation.expirationDate}
                            onChange={value => setFormState({...formState, expirationDate: value})}
                        />
                    </div>
                    <div className="payment-form__form-group">
                        <label htmlFor="cvv-code">cvv</label>
                        <Input
                            id="cvv-code"
                            placeholder="000"
                            value={cvv}
                            validation={formValidation.cvv}
                            onChange={value => setFormState({...formState, cvv: value})}
                        />
                    </div>
                    <div className="payment-form__form-group">
                        <Button>
                            Submit form
                        </Button>
                    </div>
                </form>
            )}
        </div>
    )
};
