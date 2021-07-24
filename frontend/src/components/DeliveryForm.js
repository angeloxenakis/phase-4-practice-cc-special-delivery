import React from "react"

const DeliveryForm = ({ drivers, packages, addDelivery }) => {

    const unsentPackages = packages.filter(pkg => pkg.delivery_status == false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.driver.value)
        // console.log(e.target.package.value)

        const selectedDriver = drivers.find(driver => driver.name == e.target.driver.value)
        const selectedPackage = packages.find(pkg => pkg.item == e.target.package.value)

        console.log(selectedDriver)

        fetch("http://localhost:3000/deliveries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                driver_id: selectedDriver.id,
                package_id: selectedPackage.id 
            })
        })
        .then(res => res.json())
        .then(newDelivery => addDelivery(newDelivery))
    }

    return (
        <div className="delivery-form">
            <h2>Log a Delivery</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                Driver:
                <select name="driver">
                    {drivers.map((driver) => <option>{driver.name}</option>)}
                </select>
                Package:
                <select name="package">
                    {unsentPackages.map((pkg) => <option>{pkg.item}</option>)}
                </select>
                Note:
                <input type="text" name="note"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default DeliveryForm