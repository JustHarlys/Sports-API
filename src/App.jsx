import { useState, useEffect } from 'react'
import { BalldontlieAPI } from '@balldontlie/sdk'
import './App.css'

const API_KEY = '249fa7a2-ba22-4dc2-ae69-7f916cfaf2d4'
const api = new BalldontlieAPI({ apiKey: API_KEY})
const teams = await api.mlb.getTeams()
const teamsData = teams.data

const teamPerId = teamsData.map(team => {
  return team.display_name
})

function App() {

  console.log(teamPerId)

  const [team, setTeam] = useState(teams.data)
  const [counter, setCounter] = useState(0)

  // useEffect(() => {
  //   fetch(`https://api.balldontlie.io/mlb/v1/teams/${counter}`)
  //     .then(res => res.json())
  //     .then(data => setTeam(data))
  // }, [])

  function handleCounter() {
    setCounter(counter + 1)
  }

  return (
    <>
    <pre>{JSON.stringify(team, null, 2)}</pre>
    <button onClick={handleCounter}>+</button>
    </>
  )
}

export default App
