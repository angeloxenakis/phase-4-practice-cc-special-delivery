
import './App.css';
import Drivers from './components/Drivers'
import Packages from './components/Packages'
import Deliveries from './components/Deliveries'
import DeliveryForm from './components/DeliveryForm';
import { useEffect, useState } from "react"

function App() {
  const [driverData, setDriverData] = useState([])
  const [packageData, setPackageData] = useState([])
  const [deliveryData, setDeliveryData] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/deliveries")
      .then(res => res.json())
      .then(data => setDeliveryData(data))

      fetch("http://localhost:3000/drivers")
      .then(res => res.json())
      .then(data => setDriverData(data))

      fetch("http://localhost:3000/packages")
      .then(res => res.json())
      .then(data => setPackageData(data))
  }, [])

  const addDelivery = (newDelivery) => {
    setDeliveryData([...deliveryData, newDelivery])
    fetch("http://localhost:3000/packages")
    .then(res => res.json())
    .then(data => setPackageData(data))
  }

  const removeDelivery = (deletedDelivery) => {
    setDeliveryData(deliveryData.filter((delivery) => delivery != deletedDelivery))
  }

  return (
    <div className="App">
      <div className="top-container">
        <Drivers driverData={driverData}/>
        <Packages packageData={packageData}/>
      </div>
    <DeliveryForm drivers={driverData} packages={packageData} addDelivery={addDelivery}/>
    <Deliveries deliveryData={deliveryData} removeDelivery={removeDelivery}/>
    </div>
  );
}

export default App;
