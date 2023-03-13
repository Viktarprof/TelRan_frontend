function Picture(props){
    const {src, alt} = props
    return(
        <div>
           <img src={src} alt={alt}></img>
        </div>
    )
}
export default Picture