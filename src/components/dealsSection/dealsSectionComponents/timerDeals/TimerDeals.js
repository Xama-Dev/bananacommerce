import React, { Component } from 'react'
import './TimerDeals.css'

class TimerDeals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hours: 4,
            minuts: 0,
            seconds: 0,
            verify: true,
            editInitialTimer: () => {
                if (this.state.hours < 10) {
                    this.setState((state) => ({
                        hours: `0${state.hours}`,
                        minuts: `0${state.minuts}`,
                        seconds: `0${state.seconds}`
                    }))
                }
            },
            setInitialTimer: () => {
                this.setState((state) => ({
                    hours: `0${3}`,
                    minuts: 59
                }))
            },
            setSeconds: () => {
                if (this.state.verify) {
                    this.setState((state) => ({
                        hours: `0${3}`,
                        minuts: 59,
                        verify: false
                    }))
                }

                this.setState((state) => ({
                    seconds: state.seconds - 1
                }))

                if (this.state.seconds < 10) {
                    this.setState((state) => ({
                        seconds: `0${state.seconds}`
                    }))
                }

                if (this.state.seconds === '0-1') {
                    this.setState((state) => ({
                        seconds: state.seconds = 59
                    }))
                }
            },
            setMinuts: () => {

                if (this.state.seconds === '00') {
                    this.setState((state) => ({
                        minuts: state.minuts - 1
                    }))
                }

                if (this.state.minuts < 10 && this.state.seconds === '00') {
                    this.setState((state) => ({
                        minuts: `0${state.minuts}`
                    }))
                }

                if (this.state.minuts === '00') {
                    this.setState((state) => ({
                        minuts: 59
                    }))
                }

            },
            setHour: () => {

                if (this.state.minuts === 59 && this.state.seconds === '00') {
                    this.setState((state) => ({
                        hours: `0${state.hours -= 1}`

                    }))
                }
                if (this.state.hours === '0-1') {
                    this.setState((state) => ({
                        hours: '00',
                        minuts: '00'
                    }))

                    clearInterval(this.setTimerDeals)
                }

            }
        }
    }

    componentDidMount() {

        this.state.editInitialTimer()

        this.setTimerDeals = setInterval(() => {
            this.state.setSeconds()
            this.state.setMinuts()
            this.state.setHour()

        }, 1000)
    }

    render() {

        return (
            <div className="timerDeals-container">
                <span>Ends In </span>
                <span>
                    {this.state.hours} : {this.state.minuts} : {this.state.seconds}
                </span>
            </div>
        )
    }

}
export default TimerDeals