import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

const NewPlace = () => {
    const [formState, InputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(
            'Inputs: ',
            formState.inputs,
            'isValid: ',
            formState.isValid
        );
    };

    return (
        <form className='place-form' onSubmit={placeSubmitHandler}>
            <Input
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title'
                onInput={InputHandler}
            />
            <Input
                id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a valid description (at least 5 characters)'
                onInput={InputHandler}
            />
            <Input
                id='address'
                element='input'
                label='Address'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid address)'
                onInput={InputHandler}
            />
            <Button type='submit' disabled={!formState.isValid}>
                Add Place
            </Button>
        </form>
    );
};

export default NewPlace;
