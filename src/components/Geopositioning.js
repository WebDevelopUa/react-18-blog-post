import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import {Fragment, useState} from "react";

const Geopositioning = ({lat, lon, error}) => {

    if (!error && lat && lon) {
        return (
            <ul>
                <li>Latitude: {lat}</li>
                <li>Longitude: {lon}</li>
            </ul>
        )
    } else if (!error && !lat && !lon) {
        return <Loading/>

    } else return <ErrorMessage error={error}>
        <Fragment>
            {(error.code === 1) && 'Please Enable Geolocation Access in Web browser.'}
            {(error.code === 2) && 'Please Check Your Internet Connection.'}
        </Fragment>
    </ErrorMessage>
}

export default Geopositioning
