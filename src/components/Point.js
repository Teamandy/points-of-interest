import React from 'react'
import axios from 'axios'
import PointLine from './PointLine'

class Point extends React.Component {
    constructor() {
        super()
        this.state = {
            routeId: ''
        }
    }

    componentWillMount() {
        const origin = this.props.currStation
        const destination = this.props.poi.obj.station
        axios.get(`/api/route?origin=${origin}&dest=${destination}`).then((response) => {
            this.setState({
                routeId: response.data._id
            })
        })
    }

    render() {
        const { title, rating, station } = this.props.poi.obj
        const dis = this.props.poi.dis
        const id = this.state.routeId
        return (
            <PointLine title={title} rating={rating} station={station} dis={dis} id={id} />
        )
    }
}

export default Point