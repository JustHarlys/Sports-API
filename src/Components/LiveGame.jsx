
function LiveGame({firstTeam, secondTeam, hitsFirstTeam, hitsSecondTeam}) {
  return (
    <table className="big-table">
      <thead>

      <tr>
        <th>TEAMS</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        <th>9</th>
        <th>R</th>
        <th>H</th>
        <th>E</th>
      </tr>
      <tr>
        <td>{firstTeam}</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>{hitsFirstTeam}</td>
        <td>0</td>
      </tr>
      <tr>
        <td>{secondTeam}</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>  
        <td>0</td>  
        <td>0</td>  
        <td>0</td>  
        <td>0</td>  
        <td>0</td>  
        <td>{hitsSecondTeam}</td>  
        <td>0</td>  
      </tr>
      </thead>
    </table>
  )
}

export default LiveGame