import from './Row.css'

const Row =({childre,style,className})=>{
    return(
        <div id="row" style={style} className={className}>{children}</div>
    )
} 

export default Row