import { useState, useEffect } from 'react'
import { BalldontlieAPI } from '@balldontlie/sdk'
import './App.css'

const API_KEY = '249fa7a2-ba22-4dc2-ae69-7f916cfaf2d4'
const api = new BalldontlieAPI({ apiKey: API_KEY})
const teams = await api.mlb.getTeams()
const teamsData = teams.data


function App() {

  const [team, setTeam] = useState(teams.data)

  const [counter, setCounter] = useState(0)

  const teamsPerID = team.map(t => {

    console.log()

    return {
      id: t.id,
      name: t.display_name,
      abbreviation: t.abbreviation,
    }
  })

  function handleCounter() {
    setCounter(counter + 1)
  }

  return (
    <>
    
    {  teamsPerID.forEach(function (team) {counter == team.id && <pre>{JSON.stringify(team, null, 2)}</pre>})}
    <button onClick={handleCounter}>+</button>
    <p>{counter}</p>
    </>
  )
}

export default App
