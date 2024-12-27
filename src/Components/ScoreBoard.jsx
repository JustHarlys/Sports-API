function ScoreBoard({firstAbbreviation, secondAbbreviation}) {
  return (
    <table className='scoreboard'>
        <thead>
          
            <tr>
            <i className='fa-solid fa-circle-up' style={{color: 'yellow'}}></i>
                <td>{firstAbbreviation}</td>
                <td>0</td>
                <td>1</td>
                <td colSpan="3" className='bases'>
        <div className="diamond-container">
          <div className="base first"></div>  
          <div className="base second occupied"></div> 
          <div className="base third"></div> 
        </div>
      </td>
            </tr>
            <tr>
                <i className='fa-solid fa-circle-up' style={{color: 'yellow'}}></i>
                <td>{secondAbbreviation}</td>
                <td>0</td>
                <td>. . .</td>
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