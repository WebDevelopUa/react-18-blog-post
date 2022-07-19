import Loading from "./Loading";

const Geopositioning = ({lat, lon, err}) => {
    if (!err && lat && lon) {
        return (
            <ul>
                <li>Latitude: {lat}</li>
                <li>Longitude: {lon}</li>
            </ul>
        )
    } else if (!err && !lat && !lon) {
        return <Loading />

    } else return <p>{err}. Please Enable Geolocation Access in web browser. </p>
}

export default Geopositioning
