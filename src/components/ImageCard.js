const ImageCard = ({src, alt, id}) => (
    <img
        style={{
            width: "150px",
            gridRowEnd: "span 10"
        }}
        id={id}
        src={src}
        alt={alt}
    />
)

export default ImageCard
