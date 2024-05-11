function ProductBadge({tag}){
    return (
        <div className="absolute top-6 left-6">
            <span className="rounded-full py-4 px-3 uppercase text-xs bg-[#91a8d1] text-white">{tag}</span>
        </div>
    )
}

export default ProductBadge;