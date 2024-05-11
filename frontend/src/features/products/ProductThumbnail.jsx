function ProductThumbnail({thumbnail,setCurrentImage}){
    return (
        <img src={thumbnail} className="w-40" onClick={()=> setCurrentImage(thumbnail)} />
    )

}

export default ProductThumbnail;