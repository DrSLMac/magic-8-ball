import React from 'react'
import './EightBall.css'


function EightBall({result, newFortune}) {
        return (
            <div className='eightBall-container'>
               <div className='ball-container' onClick={newFortune}>
                <div className='outer-ball'>
                    <div className='reflection'></div>
                    <div className='inner-ball'>
                        <div className='answer'>
                            <p >{result}</p>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        )
    
}

export default EightBall