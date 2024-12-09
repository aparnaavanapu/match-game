import './index.css'


const ScoreCard=(props)=>{
    const {score,resetGame}=props

    const onClickPlayAgain=()=>{
        resetGame();
    }
    
    return(
            <div className="scorecard-bg-container">
              
                <img src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png" alt="trophy" className="trophy-img" />
                <p className="display-score-text">YOUR SCORE</p>
                <p className="display-score">{score}</p>
                <button className="play-again-btn" onClick={onClickPlayAgain}><img src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png" alt="reset" className="reset-img" />PLAY AGAIN</button>
              
            </div>
    )

}
export default ScoreCard