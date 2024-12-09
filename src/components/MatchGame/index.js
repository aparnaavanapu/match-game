import { Component } from 'react'
import TabItem from '../TabItem'
import MatchItem from '../MatchItem'
import NavBar from '../NavBar'
import ScoreCard from '../ScoreCard'
import './index.css'

class MatchGame extends Component{
    constructor(props) {
        super(props);
        const { tabsList,imagesList } = this.props;
        this.state = {
          activeTabId: tabsList[0].tabId,
          timer:60,
          randomImage:imagesList[0].imageUrl,
          activeImgId:imagesList[0].id,
          score:0,
          isGameOver:false
        };
      }

      componentDidMount(){
        this.timerId=setInterval(this.timer,1000)
      }

     timer=()=>{
        this.setState(prevState=>{
            if(prevState.timer===0){
                clearInterval(this.timerId)
                return{isGameOver:true}
            }
            else{
                return({timer:prevState.timer-1})
            }
     })

      }
      componentWillUnmount(){
        clearInterval(this.timerId)
      }

      onChangeTab=(id)=>{
        this.setState({activeTabId:id})
      }
      showRandomImage=()=>{
        const {imagesList}=this.props
        const randomIndex=Math.floor(Math.random()*imagesList.length)
        const randomImg=imagesList[randomIndex].imageUrl
        this.setState({
            activeImgId:imagesList[randomIndex].id,
            randomImage:randomImg})

      }
      getMatchingImgId=(id)=>{
        //console.log(id)
        const {activeImgId}=this.state
        if(activeImgId===id){
            this.setState(prevState=>({score:prevState.score+1}))
            this.showRandomImage();

        }
        else{
            clearInterval(this.timerId)
            this.setState({isGameOver:true,
                
            })
        }
        

      }

      resetGame = () => {
        const { tabsList } = this.props;
        clearInterval(this.timerId);
        this.timerId = setInterval(this.timer, 1000);
        this.setState({
            isGameOver: false,
            timer: 60,
            score: 0,
            activeTabId: tabsList[0].tabId
        });
    };
    

    render(){
        const {activeTabId,timer,randomImage,score,isGameOver}=this.state
        const {tabsList,imagesList}=this.props
        const filteredImages=imagesList.filter(eachItem=>eachItem.category===activeTabId)
        return(
            <div className="bg-container">
                <NavBar timer={timer} score={score}/>
                <div className="bottom-section">
                    {isGameOver?(<ScoreCard score={score} resetGame={this.resetGame}/>):(
                        <div className="card-container">
                        <div className="random-img-container">
                            <img src={randomImage} alt="match-image" className="random-img" />
                        </div>
                        <ul className="tabs-container">
                            {tabsList.map(eachItem=>(
                                <TabItem tabDetails={eachItem} key={eachItem.tabId} onChangeTab={this.onChangeTab} isActive={activeTabId===eachItem.tabId}/>
                            ))}
    
                        </ul>
                        <ul className="thumbnails-container">
                            {filteredImages.map(eachItem=>(
                                <MatchItem imgDetails={eachItem} key={eachItem.id} getMatchingImgId={this.getMatchingImgId}/>
                            ))}
    
                        </ul>
                        </div>
                    )}
                </div>
                    
            </div>

        )
    }
}

export default MatchGame 