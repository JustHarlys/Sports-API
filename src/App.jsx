import { useState, useEffect } from 'react'
import { BalldontlieAPI } from '@balldontlie/sdk'
import './App.css'
import ScoreBoard from './Components/ScoreBoard'

const API_KEY = '249fa7a2-ba22-4dc2-ae69-7f916cfaf2d4'

function App() {

  const [teams, setTeams] = useState([])
  const [firstTeamSelected, setFirstTeamSelected] = useState(false)
  const [secondTeamSelected, setSecondTeamSelected] = useState(false)
  const [outs, setOuts] = useState(0)
  const [batting, setBatting] = useState(false)
  const [play, setPlay] = useState("")
  const [innings, setInnings] = useState(0)
  const [runsFirstTeam, setRunsFirstTeam] = useState(0)
  const [runsSecondTeam, setRunsSecondTeam] = useState(0)
  const [winner, setWinner] = useState(false)


  const [counterFirstTeam, setCounterFirstTeam] = useState(1)
  const [counterSecondTeam, setCounterSecondTeam] = useState(1)

  useEffect(()=> {
    const api = new BalldontlieAPI({ apiKey: API_KEY})
    
    const fetchTeams = async () => {

      const logosMLB = [
        "https://loodibee.com/wp-content/uploads/mlb-arizona-diamondbacks-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-atlanta-braves-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-baltimore-orioles-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-boston-red-sox-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-chicago-cubs-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-chicago-white-sox-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-cincinnati-reds-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-cleveland-guardians-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-colorado-rockies-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-detroit-tigers-logo.png",
        "https://loodibee.com/wp-content/uploads/Houston-Astros-Emblem-300x300.png",
        "https://loodibee.com/wp-content/uploads/mlb-kansas-city-royals-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-los-angeles-angels-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-los-angeles-dodgers-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-miami-marlins-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-milwaukee-brewers-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-minnesota-twins-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-new-york-mets-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-new-york-yankees-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-oakland-athletics-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-Philadelphia-Phillies-Logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-pittsburgh-pirates-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-san-diego-padres-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-san-francisco-giants-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-seattle-mariners-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-st-louis-cardinals-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-tampa-bay-rays-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-texas-rangers-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-toronto-blue-jays-logo.png",
        "https://loodibee.com/wp-content/uploads/mlb-Washington-Nationals-Logo-300x300.png"
      ];
        
      const teamsRes = await api.mlb.getTeams()
      const teamsData = teamsRes.data

      function compareById(a, b) {
        return a.id - b.id;
      }
      teamsData.sort(compareById)

      if(Array.isArray(logosMLB) && logosMLB.length === 30) {
        const modifiedTeams = teamsData.map((team, index) => {
          return {
            ...team,
            logo: logosMLB[index]
          }
        })
        setTeams(modifiedTeams)
      }
    }
    fetchTeams();
  }, [])


  const selectFirstTeam = teams.find(t => t.id === counterFirstTeam)
  const selectSecondTeam = teams.find(t => t.id === counterSecondTeam)


  function toggleRightFirstCounter () {
    setCounterFirstTeam((prevCounter) => (prevCounter % 30) + 1)
  }

  function toggleLeftFirstCounter () {
    setCounterFirstTeam((prevCounter) => (prevCounter - 1 % 30) % 30 || 30)
  }

  function toggleRightSecondCounter () {
    setCounterSecondTeam((prevCounter) => (prevCounter % 30) + 1)
  }

  function toggleLeftSecondCounter () {
    setCounterSecondTeam((prevCounter) => (prevCounter - 1 % 30) % 30 || 30)
  }

  function selectFirstTeamHandler () {
    setFirstTeamSelected(prevState => !prevState)
  }

  function selectSecondTeamHandler () {
    setSecondTeamSelected(prevState => !prevState)
  }

  const possibilities = ["Fly Out", "Run", "Run", "Run", "Run", "Ground Out", "Run", "Pop Out", "Strike Out", "Line Out", "Run", "Fly Out", "Line Out", "Strike Out", "Strike Out"]

  
  function getPlay() {
    const playProb = possibilities[Math.floor(Math.random() * possibilities.length)]

    setPlay(playProb)
    
    if (play.includes("Out")) {
      setOuts((prevOuts) => prevOuts + 1)
    }
    else {
      return play
    }

    if (outs === 2) {
      setBatting(prevState => !prevState)
      setOuts(0)
      setPlay(
        <>
          End of turn for: {batting ? selectSecondTeam.display_name : selectFirstTeam.display_name}
          <br />
          Next up: {batting ? selectFirstTeam.display_name : selectSecondTeam.display_name}
        </>
      );
          }
    if (innings >= 9 && runsFirstTeam > runsSecondTeam && batting === true && outs === 2) {
      setPlay(`End of the game. ${selectFirstTeam.display_name} wins!`)
      setWinner(true)
    }
    if (innings >= 9 && runsFirstTeam < runsSecondTeam && batting === false && outs === 2) {
      setPlay(`End of the game. ${selectSecondTeam.display_name} wins!`)
      setWinner(true)
    }
    if (
      (innings > 9 || innings === 9) && 
      runsSecondTeam === runsFirstTeam && 
      batting === true && 
      outs < 2 &&
      playProb ==='Run'
  ) {
      setWinner(true);
      setRunsSecondTeam((prevRuns) => prevRuns + 1);
      setPlay(`Walk-off win! ${selectSecondTeam.display_name} wins in extra innings!`);
      return;
  }
}

  function resetGame() {
    if (winner) {

      setOuts(0)
      setBatting(false)
      setPlay("")
      setInnings(0)
      setRunsFirstTeam(0)
      setRunsSecondTeam(0)
      setWinner(false)
    }
  }

  function reselectTeams() {
    setSecondTeamSelected(false)
    setFirstTeamSelected(false)
    setOuts(0)
    setBatting(false)
    setPlay("")
    setInnings(0)
    setRunsFirstTeam(0)
    setRunsSecondTeam(0)
    setWinner(false)
  }

  useEffect(() => {
    if (play === "Run") {
      if (batting) {
        setRunsSecondTeam(runsSecondTeam + 1)
      }
      else {
        setRunsFirstTeam(runsFirstTeam + 1)
      }
    }

  }, [play])


  useEffect(() =>{
    if (!batting === true) {
      setInnings(innings + 1)
    }
  }, [batting])




  return (
    <>
      {
        firstTeamSelected && secondTeamSelected && selectFirstTeam && selectSecondTeam ? ( 
          
          
          <div className='play-ball-container'>
            <ScoreBoard firstAbbreviation={selectFirstTeam.abbreviation} secondAbbreviation={selectSecondTeam.abbreviation} outs={outs} batting={batting} innings={innings} runsFirstTeam={runsFirstTeam} runsSecondTeam={runsSecondTeam} winner={winner}/>          
            {!winner && <button onClick={getPlay}>Make a Play</button>}
            <div>
              <h4 style={{color: "white"}}>Play made</h4>
              <p style={{color: "white"}}>{play}</p>

              <div className='endgame-buttons'>
                
              {winner && <button onClick={resetGame}>Play again</button>}
              {winner && <button onClick={reselectTeams}>Reselect teams</button>}
              </div>
            </div>
          </div>
        ) :
      
      teams.length === 0 ? (
        <>

        <div className='loading-container'>

        <p>Cargando equipos...</p>
        </div>
        </>
      ) : (
        <>
        <div className='teams-container'>


          <div className='team-container'>


          <img src={selectFirstTeam.logo} alt={`Logo de ${selectFirstTeam.display_name}`}  className='team-logo'/>
          <div className='select-first-team'>
          {firstTeamSelected ? ""  : <button onClick={toggleLeftFirstCounter}>{'<'}</button>}
          <p>{selectFirstTeam?.display_name}</p> 
          {firstTeamSelected ? ""  : <button onClick={toggleRightFirstCounter}>{'>'}</button>}
          </div>
          <button onClick={selectFirstTeamHandler}>{firstTeamSelected ? 'Unselect' : "Select"}</button>
          </div>
          
          
          <p className='vs'>vs</p> 



          <div className='team-container'>
          <img src={selectSecondTeam.logo} alt={`Logo de ${selectSecondTeam.display_name}`}  className='team-logo'/>
          <div className='select-second-team'>
          {secondTeamSelected ? "" : <button onClick={toggleLeftSecondCounter}>{'<'}</button>}
          <p>{selectSecondTeam?.display_name}</p>
          {secondTeamSelected ? "" : <button onClick={toggleRightSecondCounter}>{'>'}</button>}
          </div>
          <button onClick={selectSecondTeamHandler}>{secondTeamSelected ? 'Unselect' : "Select"}</button>

          </div>


        </div>

        </>
      )}
    </>
  );
  
}

export default App
