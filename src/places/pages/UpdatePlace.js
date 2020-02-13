import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';

import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Haji Lane',
        description: 'Little Insadong',
        imageUrl:
            'https://images.unsplash.com/photo-1555947970-15e7a8a0bb73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2989&q=80',
        address: '42A Haji Ln, 2nd Floor, Singapore 189235',
        location: {
            lat: 1.3008978,
            lng: 103.8588572
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Bugis Street',
        description:
            'Lively shopping street with dozens of apparel shops, food markets, souvenir stores & eateries.',
        imageUrl:
            'https://images.unsplash.com/photo-1507694463612-f20c65096a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        address: '3 New Bugis Street, Singapore 188867',
        location: {
            lat: 1.3006044,
            lng: 103.8527043
        },
        creator: 'u2'
    }
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find the place</h2>
            </div>
        );
    }
    return (
        <form className="place-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Please enter a valid title"
                onInput={() => {}}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min 5 characters)"
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>
                UPDATE PLACE
            </Button>
        </form>
    );
};

export default UpdatePlace;
