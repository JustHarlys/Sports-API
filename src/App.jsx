import { useState, useEffect } from 'react'
import { BalldontlieAPI } from '@balldontlie/sdk'
import './App.css'

const API_KEY = '249fa7a2-ba22-4dc2-ae69-7f916cfaf2d4'

function App() {

  const [teams, setTeams] = useState([])

  const [counter, setCounter] = useState(0)

  useEffect(()=> {
    const api = new BalldontlieAPI({ apiKey: API_KEY})
    
    const fetchTeams = async () => {
      const teamsRes = await api.mlb.getTeams()
      const teamsData = teamsRes.data
      setTeams(teamsData)
    }

    fetchTeams();
  }, [])

  const randomTeamOne = Math.floor(Math.random() * teams.length)
  const randomTeamTwo = Math.floor(Math.random() * teams.length)

  const selectedNumbers = new Set([randomTeamOne, randomTeamTwo])
  const [firstNumber, secondNumber] = [...selectedNumbers]


  const selectFirstTeam = teams.find(t => t.id === firstNumber)
  const selectSecondTeam = teams.find(t => t.id === secondNumber)

  return (
    <>
      {teams.length === 0 ? (
        <p>Cargando equipos...</p>
      ) : (
        <>
          <p>{selectFirstTeam?.display_name}</p> vs <p>{selectSecondTeam?.display_name}</p>
          {selectFirstTeam && <pre>{JSON.stringify(selectFirstTeam, null, 2)}</pre>}
          {selectSecondTeam && <pre>{JSON.stringify(selectSecondTeam, null, 2)}</pre>}
        </>
      )}
    </>
  );
  
}

export default App
