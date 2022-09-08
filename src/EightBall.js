import React, { Component } from 'react'
import './EightBall.css'


function EightBall({result, newFortune}) {
        return (
            <div className='eightBall-container'>
               <div className='ball-container'>
                <div className='outer-ball'>
                    <div className='inner-ball'>
                        <button onClick={newFortune}>
                            <p className='answer'>{result}</p>
                        </button>
                    </div>
                </div>
               </div>
            </div>
        )
    
}

export default EightBall