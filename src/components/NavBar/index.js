import './index.css'

const NavBar=(props)=>{
    const {timer,score}=props
    return (
        <nav className="top-section">
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png" alt="game-logo" className="nav-logo"/>
            </div>
            <div className="score-container">
                <div className="timer-container">
                <p className="score-text">Score : </p>
                <p className="count">{score}</p>
                </div>
                <div className="timer-container">
                <img src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png " alt="timer" className="timer-img"/>
                <p className="count">{timer}</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar