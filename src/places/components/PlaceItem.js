import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

import './PlaceItem.css';

const PlaceItem = props => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const { isLoggedin } = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMapHandler = () => {
        setShowMap(true);
    };

    const closeMapHandler = () => {
        setShowMap(false);
    };

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteWarningHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler = async () => {
        console.log('confirmDeleteHandler', props.id);
        setShowConfirmModal(false);
        try {
            const deletedPlace = await sendRequest(
                `http://localhost:5000/api/places/${props.id}`,
                'DELETE'
            );
            console.log('delete request sent', deletedPlace);

            props.onDelete(props.id);
        } catch (err) {}
    };

    return (
        <>
            <ErrorModal error={error} onClear={clearError} />
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass='place-item__modal-content'
                footerClass='place-item__modal-actions'
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className='map-container'>
                    <Map center={props.coordinates} zoom={16} />
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteWarningHandler}
                header='Are you sure?'
                footerClass='place-item__modal-actions'
                footer={
                    <>
                        <Button inverse onClick={cancelDeleteWarningHandler}>
                            CANCEL
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            DELETE
                        </Button>
                    </>
                }
            >
                <div className='center'>
                    Are you sure? Please note that you can't undo this
                </div>
            </Modal>
            <li className='place-item'>
                <Card className='place-item__content'>
                    {isLoading && <LoadingSpinner asOverlay />}
                    <div className='place-item__image'>
                        <img
                            src={`http://localhost:5000/${props.image}`}
                            alt={props.title}
                        />
                    </div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={openMapHandler}>
                            VIEW MAP
                        </Button>
                        {auth.userId === props.creatorId && (
                            <>
                                <Button to={`/places/${props.id}`}>EDIT</Button>
                                <Button
                                    danger
                                    onClick={showDeleteWarningHandler}
                                >
                                    DELETE
                                </Button>
                            </>
                        )}
                    </div>
                </Card>
            </li>
        </>
    );
};

export default PlaceItem;
