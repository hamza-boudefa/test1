import React from 'react'
import Video from './Video'
import { suggestions } from './Data'

const Sidebar = () => {
    console.log(suggestions)
    return (
        <div className="sidebar">
            {suggestions.map((el) => <Video el={el} /> )}
        </div>
    )
}

export default Sidebar