import React from 'react'
import { Link } from 'react-router-dom'
import Star from 'react-icons/lib/md/star'

class PointLine extends React.Component {
    render() {
        const { title, rating, station, dis, id } = this.props
        return (
            <tr>
                <td><span className='title'>{title}</span></td>
                <td><span className='rating'>{rating}<Star /></span></td>
                <td><span className='station'>{station}</span></td>
                <td><span className='dist'>{Math.floor(dis / 1000)}km</span></td>
                <td><Link to={`/home/route/${id}`}><span className='route'>see details</span></Link></td>
            </tr>
        )
    }
}

export default PointLine