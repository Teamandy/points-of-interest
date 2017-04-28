import React from 'react'
import Rouble from 'react-icons/lib/fa/rouble'

class RouteLine extends React.Component {
    render() {
        const { origin, destination, time, price} = this.props
        return (
            <div>
                <h2>Your route details: </h2>
                <table>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Time, min</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className='origin'>{origin}</span></td>
                            <td><span className='dest'>{destination}</span></td>
                            <td><span className='time'>{time}</span></td>
                            <td><span className='price'>{price} <Rouble/></span></td>
                        </tr>
                    </tbody>
                </table>
                </div>
        )
    }
}

export default RouteLine