
import React from 'react'
import ReactPlayer from 'react-player'
import { suggestions } from './Data'
const Video = ({el}) => {
    return (
        <div>
            <ReactPlayer url={el.url} />
            <h2> {el.title} </h2>
            <p> {el.views} </p>
        </div>
    )
}

export default Video