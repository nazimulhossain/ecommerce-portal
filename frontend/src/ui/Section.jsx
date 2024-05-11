function Section({tag,heading}){
return (
    <div className="text-center">
    <span className="uppercase text-lg">{tag}</span>
    <h2 className="text-6xl mb-4">{heading}</h2>

</div>
)
}

export default Section;