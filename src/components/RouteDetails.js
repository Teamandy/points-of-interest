import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import RouteLine from './RouteLine'

class RouteDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            origin: '',
            destination: '',
            time: '',
            price: ''
        }
    }
    componentWillMount() {
        const routeId = this.props.match.params.id
        axios.get(`/api/route?id=${routeId}`).then((response) => {
            const { origin, destination, time, price } = response.data
            this.setState({
                origin,
                destination,
                time,
                price
            })
        })
    }
    render() {

        return (
            <div>
                <RouteLine {...this.state} />
                <Link to='/home'><button className="back">Back</button></Link>
            </div>
        )
    }
}

export default RouteDetails