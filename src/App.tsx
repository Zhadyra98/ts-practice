import React, {useState} from 'react'
import {User} from "./interfaces";


function App() {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = () =>
        setUser({
            name: "Michael",
            age: 23,
            country: "USA",
            address: {
                street: "Cosmo",
                number: 35,
                zip: "123A"
            },
            admin: false
        });

    return (
        <>
            <button onClick={fetchUser}> Fetch User </button>
            {user && <p>Welcome {user.name}</p>}
        </>
    );
}

export default App;
