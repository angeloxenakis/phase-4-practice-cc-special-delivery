import React, { useEffect, useState } from 'react'

const Packages = ({ packageData }) => {
    return (
        <div className="top-panel">
            <h2>Packages:</h2>
            <table>
                <th>Item</th><th>Address</th><th>Status</th>
                {packageData.map((pack) => (
                    <tr>
                        <td>{pack.item}</td>
                        <td>{pack.address}</td>
                        <td>{pack.delivery_status ? "Delivered" : "Awaiting"}</td>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default Packages