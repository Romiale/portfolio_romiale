import Card from './Card';
import { React, useState, useEffect } from 'react';

const ListRobots = () => {
    const [Users, setUsers] = useState([])
    const [UsersAffiche, setUserAffiche] = useState([])
    useEffect(() => {
        let image = 'https://robohash.org/'
        let requete = "https://jsonplaceholder.typicode.com/users/";
        fetch(requete)
            .then(function (res) {
                res.json()
                    .then(function (data) {
                        let newUsers = data.map(user => {
                            return {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                src: image + user.id,
                                username: user.username,
                                address: user.address,
                                phone: user.phone
                            }
                        })
                        setUsers(newUsers)
                        setUserAffiche(newUsers)
                    })
            })
    }, [])

    const research = (event) => {
        let value = event.target.value;
        let regex = new RegExp(value, 'gi');
        const Robots = Users.filter(Element => {
            return regex.test(Element.name);
        })
        setUserAffiche(Robots)
    }

    return (
        <div className="col-10 offset-1 bg-light d-flex row justify-content-center">
            <h1 className="text-center">Mes amis Robots</h1>
            <div className="col-md-3">
                <input type="text" className="form-control m-3" placeholder="Entrez un nom" onChange={research} />
            </div>
            <div className="col-md-12 d-flex flex-wrap justify-content-center">
                {
                    UsersAffiche.map(user => {

                        return <Card key={user.id} user={user} />
                    })
                }
            </div>
        </div>
    )
}
export default ListRobots;