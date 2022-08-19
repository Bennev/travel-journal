import "./style.css"

import React from "react"

export default function Card({item}) {
    const {imageUrl, location, googleMapsUrl, title, startDate, endDate, description} = item
    return (
        <div className="card">
            <img className="card--image" src={imageUrl} />
            <div className="card--info">
                <div className="card--stats">
                    <img className="card--pin" src="../images/pin.png" />
                    <span className="card--country" >{location.toUpperCase()}</span>
                    <a href={googleMapsUrl} target="_blank" className="card--map" >View on Google Maps</a>
                </div>
                <h2 className="card--title">{title}</h2>
                <p className="card--date">{startDate} - {endDate}</p>
                <p className="card--description">{description}</p>
            </div>
        </div>
    )
}