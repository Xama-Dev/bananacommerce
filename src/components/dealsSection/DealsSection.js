import React, { Component } from 'react'
import './DealsSection.css'

import TimerDeals from './dealsSectionComponents/timerDeals/TimerDeals'
import SlickSliderDeals from './dealsSectionComponents/slickSliderDeals/SlickSliderDeals'

class DealsSection extends Component {
    render() {
        return(
            <section>
                <div className="container-deals__section">
                    <div className="timer__deals-container">
                        <div className="wrap-label-timer__deals">
                            <h1>Deals Of The Day</h1>
                            <TimerDeals />
                        </div>
                        <a href="/">View All</a>
                    </div>                    
                    <SlickSliderDeals />
                </div>
            </section>
        )
    }
}
export default DealsSection