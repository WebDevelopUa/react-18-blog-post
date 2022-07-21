const UnsplashImageList = ({images}) => images.map(
    ({description, id, urls}) => (
        <img id={id}
             key={id}
             src={urls.thumb}
             alt={description}
        />
    )
)

export default UnsplashImageList
