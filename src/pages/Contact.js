import {useEffect, useState} from "react";
import Geopositioning from "../components/Geopositioning";

const Contact = () => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(
        () => {
            // Geolocation service - https://developer.mozilla.org/ru/docs/Web/API/Geolocation/getCurrentPosition
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position)
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                },
                positionError => {
                    console.log(positionError)
                    setErrorMessage(positionError.message)
                },
            )
        }, []
    )



    return (
        <>
            <h1>Contact Us</h1>
            <h2>Your Geolocation:</h2>
            <Geopositioning lat={latitude} lon={longitude} err={errorMessage}/>
        </>

    );
};

export default Contact;
