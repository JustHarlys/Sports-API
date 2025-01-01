
function ScoreBoard({firstAbbreviation, secondAbbreviation, batting, outs, innings}) {
  return (
    <table className='scoreboard'>
        <thead>
          
            <tr>
           
                <td> {!batting && <i className='fa-solid fa-circle-up' style={{color: 'yellow'}}></i>} {firstAbbreviation}</td>
                <td>0</td>
                <td>{outs !== 0 && outs}</td>
                <td colSpan="3" className='bases'>
        <div className="diamond-container">
          <div className="base first"></div>  
          <div className="base second occupied"></div> 
          <div className="base third"></div> 
        </div>
      </td>
            </tr>
            <tr>
                
                <td>{batting && <i className='fa-solid fa-circle-up' style={{color: 'yellow'}}></i>} {secondAbbreviation}</td>
                <td>0</td>
                <td style={{color: "yellow", fontSize: 6, gap: 5}}>
                {Array(outs).fill().map((_, i) => <i key={i} className="fa-solid fa-circle"></i>)}
                </td>
                <td className='innings'>
                    <div className="arrows">
                        <p style={!batting ? {color: "yellow"} : {}}>{'>'}</p>
                        <p style={batting ? {color: "yellow"} : {}}>{'<'}</p>
                    </div>
                    <p>{innings}</p>
                </td>
            </tr>
        </thead>

    </table>
  )
}

export default ScoreBoard