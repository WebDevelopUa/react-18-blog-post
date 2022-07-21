const ImageListGrid = ({children}) => (
    <div className="image-list"
         style={{
             backgroundColor: "lightgoldenrodyellow",
             display: "grid",
             gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
             gridGap: "10px 10px",
         }}
    >
        {children}
    </div>
)

export default ImageListGrid;
