import React from 'react'

function ScoreBoard({firstAbbreviation, secondAbbreviation}) {
  return (
    <table className='scoreboard'>
        <thead>
            <tr>
                <td>{firstAbbreviation}</td>
                <td>0</td>
                <td>1</td>
                <td colspan="3" className='bases'>
        <div class="diamond-container">
          <div class="base first"></div>  
          <div class="base second occupied"></div> 
          <div class="base third"></div> 
        </div>
      </td>
            </tr>
            <tr>
                <td>{secondAbbreviation}</td>
                <td>0</td>
                <td>. . .</td>
                <td className='innings'>
                    <div class="arrows">
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