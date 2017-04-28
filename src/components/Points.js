import React from 'react'
import Point from './Point'
import DropDown from 'react-icons/lib/md/arrow-drop-down'

class Points extends React.Component {
    render() {
        const { points } = this.props
        points.sort((a, b) => {
            return b.obj.rating - a.obj.rating
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Rating <DropDown/> </th>
                        <th>Station</th>
                        <th>Distance <DropDown/> </th>
                        <th>Route</th>
                    </tr>
                </thead>
                <tbody>
                    {points.map((point, index) => {
                    return <Point key={index} poi={point} />
                })}
                </tbody>                
            </table>
        )
    }
}

export default Points