import React from 'react'
import Point from './Point'
import DropDown from 'react-icons/lib/md/arrow-drop-down'
import DropUp from 'react-icons/lib/md/arrow-drop-up'

class Points extends React.Component {
    render() {
        const { points, currentStation, sort } = this.props
        return (
            <table>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th className='sort' onClick={sort.byRating}>Rating {sort.rated === 'down' ? <DropDown /> : <DropUp />} </th>
                        <th>Station</th>
                        <th className='sort' onClick={sort.byDistance}>Distance {sort.dist === 'down' ? <DropDown /> : <DropUp />} </th>
                        <th>Route</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map((point, index) => {
                        return <Point key={index} poi={point} currStation={currentStation} />
                    })}
                </tbody>
            </table>
        )
    }
}

export default Points