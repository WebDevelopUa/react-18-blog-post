import ImageCard from "./ImageCard";

const ImageList = ({images}) => images.map(
    ({description, id, urls}) => <ImageCard
        id={id}
        key={id}
        src={urls.small}
        alt={description}
    />
)

export default ImageList
