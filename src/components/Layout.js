import React from 'react'
import axios from 'axios'
import Points from './Points'

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            search: false,
            byRating: 'none',
            byDistance: 'none',
            points: [],
            stations: ['Revda', 'Druzhinino', 'Krasnoufimsk'],
            currentStation: ''
        }
        this.sortByDistance = this.sortByDistance.bind(this)
        this.sortByRating = this.sortByRating.bind(this)
    }

    submitHandler(e) {
        e.preventDefault()
        const stationName = this.stationInput.value
        axios({
            method: 'get',
            url: `/api/poi/${stationName}`
        }).then((res) => {
            const code = res.data.code
            axios.get(`/api/poi?lon=${res.data.coords[0]}&lat=${res.data.coords[1]}`).then((response) => {
                this.setState({
                    points: response.data,
                    search: true,
                    currentStation: code
                })
            }).catch(error)
        }).catch(error)
    }

    //sort POI-s by rating
    sortByRating() {
        const sortedArray = this.state.points
        if (this.state.byRating === 'down') {
            sortedArray.sort((a, b) => {
                return a.obj.rating - b.obj.rating
            })
            this.setState({ points: sortedArray, byRating: 'up' })
        } else {
            sortedArray.sort((a, b) => {
                return b.obj.rating - a.obj.rating
            })
            this.setState({ points: sortedArray, byRating: 'down' })
        }
    }

    //sort POI-s by distance
    sortByDistance() {
        const sortedArray = this.state.points
        if (this.state.byDistance === 'down') {
            sortedArray.sort((a, b) => {
                return a.dis - b.dis
            })
            this.setState({ points: sortedArray, byDistance: 'up' })
        } else {
            sortedArray.sort((a, b) => {
                return b.dis - a.dis
            })
            this.setState({ points: sortedArray, byDistance: 'down' })
        }
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
                {this.state.search === true ?
                    <Points
                        points={this.state.points}
                        currentStation={this.state.currentStation}
                        sort={{
                            byRating: this.sortByRating,
                            rated: this.state.byRating,
                            byDistance: this.sortByDistance,
                            dist: this.state.byDistance
                        }}
                    /> : null
                }
            </div>
        )
    }
}

export default Layout