const { useState, useEffect } = require("react")

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data.services));
    } ,[]);
    return [services, setServices];
}

export default useServices;