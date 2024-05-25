function Section({tag,heading}){
return (
    <div className="text-center">
    <span className="uppercase text-xs lg:text-lg font-semibold">{tag}</span>
    <h2 className="text-4xl mb-6 lg:text-6xl">{heading}</h2>

</div>
)
}

export default Section;