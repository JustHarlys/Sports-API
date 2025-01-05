
function ScoreBoard({firstAbbreviation, secondAbbreviation, batting, outs, innings, runsFirstTeam, runsSecondTeam}) {
  return (
    <table className='scoreboard'>
        <thead>
          
            <tr>
           
                <td> {!batting && <i className='fa-solid fa-circle-up' style={{color: 'yellow'}}></i>} {firstAbbreviation}</td>
                <td>{runsFirstTeam}</td>
                <td className='innings'>
                    <div className="arrows">
                        <p style={!batting ? {color: "yellow"} : {}}>{'>'}</p>
                        <p style={batting ? {color: "yellow"} : {}}>{'<'}</p>
                    </div>
                    <p>{innings}</p>
                </td>
            </tr>
            <tr>
                
                <td>{batting && <i className='fa-solid fa-circle-up' style={{color: 'yellow'}}></i>} {secondAbbreviation}</td>
                <td>{runsSecondTeam}</td>
                <td style={{color: "yellow", fontSize: 6, gap: 5}}>
                {Array(outs).fill().map((_, i) => <i key={i} className="fa-solid fa-circle"></i>)}
                </td>
                
            </tr>
        </thead>

    </table>
  )
}

export default ScoreBoard