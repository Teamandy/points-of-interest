import React from 'react'
import { Link } from 'react-router-dom'
import Star from 'react-icons/lib/md/star'

class Point extends React.Component {
    render() {
        const { title, rating, station} = this.props.poi.obj
        return (
            <tr>
                <td><span className='title'>{title}</span></td>
                <td><span className='rating'>{rating}<Star /></span></td>
                <td><span className='station'>{station}</span></td>
                <td><span className='dist'>{Math.floor(this.props.poi.dis / 1000)}km</span></td>
                <td><Link to='/home/route-details'><span className='route'>details</span></Link></td>
            </tr>
        )
    }
}

export default Point