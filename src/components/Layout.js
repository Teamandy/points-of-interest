import React from 'react'
import axios from 'axios'
import Points from './Points'

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            search: false,
            points: [],
            stations: ['Revda', 'Druzhinino', 'Krasnoufimsk']
        }
    }

    submitHandler(e) {
        e.preventDefault()
        const stationName = this.stationInput.value
        axios({
            method: 'get',
            url: `/api/poi/${stationName}`
        }).then((res) => {
            axios.get(`/api/poi?lon=${res.data[0]}&lat=${res.data[1]}`).then((response) => {
                this.setState({
                    points: response.data,
                    search: true
                })
            }).catch(error)
        }).catch(error)
    }

    render() {
        return (
            <div id="points-container">
                <h2>Find interesting places nearby!</h2>
                <form id='search' onSubmit={this.submitHandler.bind(this)}>
                    <label htmlFor="station">Station</label>
                    <input list="stationList" id="station" ref={(input) => { this.stationInput = input }} type="text" placeholder="enter your station here" required />
                    <datalist id="stationList">
                        {this.state.stations.map((station) => ( 
                            <option>{station}</option>
                        ))}
                    </datalist>
                    <input type="submit" value="Search" />
                </form>
                {this.state.search === true ? <Points points={this.state.points} /> : null}
            </div>
        )
    }
}

export default Layout