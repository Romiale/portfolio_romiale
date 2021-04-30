import { React, useState, useEffect } from 'react';
import CardList from './CardList';

const ListRobots = () => {
    const [robots, setRobots] = useState([])
    const [filteredRobots, setFilteredRobots] = useState(robots)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(transformRobotsDataAndSetState)
    }, [])

    const transformRobotsDataAndSetState = (res) => {
        const sourceImage = 'https://robohash.org/'
        res.json()
            .then(data => {
                const robots = data.map(robot => {
                    return {
                        id: robot.id,
                        name: robot.name,
                        email: robot.email,
                        src: sourceImage + robot.id,
                        username: robot.username,
                        address: robot.address,
                        phone: robot.phone
                    }
                })
                setRobots(robots)
                setFilteredRobots(robots)
            })
    }
    const search = event => {
        let value = event.target.value;
        const searchResult = robots.filter(robot => robot.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredRobots(searchResult)
    }

    return (
        <div className="col-10 offset-1 bg-light d-flex row justify-content-center">
            <h1 className="text-center mt-1">Mes amis Robots</h1>
            <div className="col-md-4">
                <input type="text" className="form-control my-4 border-secondary col-12" placeholder="Entrez un nom" onChange={search} />
            </div>
            <div>
                <CardList robots={filteredRobots} />
            </div>
        </div>
    )
}
export default ListRobots;