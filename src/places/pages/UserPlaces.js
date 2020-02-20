import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Haji Lane 2',
        description: 'Little Insadong',
        imageUrl:
            'https://images.unsplash.com/photo-1555947970-15e7a8a0bb73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2989&q=80&SameSite=None&secure',
        address: '42A Haji Ln, 2nd Floor, Singapore 189235',
        location: {
            lat: 1.3008978,
            lng: 103.8588572
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Bugis Street 2',
        description:
            'Lively shopping street with dozens of apparel shops, food markets, souvenir stores & eateries.',
        imageUrl:
            'https://images.unsplash.com/photo-1507694463612-f20c65096a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80SameSite=None&secure',
        address: '3 New Bugis Street, Singapore 188867',
        location: {
            lat: 1.3072293,
            lng: 103.8293323
        },
        creator: 'u2'
    }
];
const UserPlaces = props => {
    const userId = useParams().userId;

    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
