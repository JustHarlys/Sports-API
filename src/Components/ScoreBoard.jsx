
function ScoreBoard({firstAbbreviation, secondAbbreviation, batting, outs}) {
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
                <td>{".".repeat(outs)}</td>
                <td className='innings'>
                    <div className="arrows">
                        <p>{'>'}</p>
                        <p>{'<'}</p>
                    </div>
                    <p>7</p>
                </td>
            </tr>
        </thead>

    </table>
  )
}

export default ScoreBoard