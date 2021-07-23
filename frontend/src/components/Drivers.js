import React, { useEffect, useState }  from "react"

const Drivers = ({ driverData }) => {
    return (
        <div className="top-panel">
            <h2>Drivers:</h2>
            <div className="drivers-container">
                {driverData.map((driver) => (
                    <div className="driver-card">
                        <img className="driver-img" src={driver.img_url} />
                        <h4>{driver.name}</h4>
                        <h5>Total Drives:{driver.deliveries.length}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Drivers