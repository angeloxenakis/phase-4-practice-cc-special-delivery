import React, { useEffect, useState }  from "react"

const Deliveries = ({ deliveryData, removeDelivery }) => {

    const handleDelete = (deletedDelivery) => {
        fetch(`http://localhost:3000/deliveries/${deletedDelivery.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(removeDelivery(deletedDelivery))
    }

    return (
        <div className="deliveries-container">
            <h2>All Deliveries:</h2>
            <table>
                <th>Driver</th><th>Item</th><th>Address</th>
                {deliveryData.map((delivery) => (
                    <tr>
                        <td>{delivery.driver.name}</td>
                        <td>{delivery.package.item}</td>
                        <td>{delivery.package.address}</td>
                        <td><button onClick={(e) => handleDelete(delivery)}>Delete</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Deliveries