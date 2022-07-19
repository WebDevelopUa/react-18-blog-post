import {useState} from "react";

const Contact = () => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

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

    // Conditional rendering of Geo
    function geo() {
        if (!errorMessage && latitude && longitude) {
            return (
                <ul>
                    <li>Latitude: {latitude}</li>
                    <li>Longitude: {longitude}</li>
                </ul>
            )
        } else if (!errorMessage && !latitude && !longitude) {
            return <p>Loading ...</p>

        } else return <p>{errorMessage}. Please Enable Geolocation Access in web browser. </p>
    }

    return (
        <>
            <h1>Contact Us</h1>
            <h2>Your Geolocation:</h2>
            {geo()}
        </>

    );
};

export default Contact;
