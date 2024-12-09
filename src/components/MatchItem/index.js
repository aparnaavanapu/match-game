import './index.css'
const MatchItem=(props)=>{
    const {imgDetails,getMatchingImgId}=props
    const {thumbnailUrl,id}=imgDetails
    const matchImage=()=>{
        getMatchingImgId(id);
    }
    return(
        <li>
            <button className="btn" onClick={matchImage}><img src={thumbnailUrl} alt="match-img" className="thumbnail-img"/></button>
        </li>
    )
}

export default MatchItem