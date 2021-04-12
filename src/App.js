import React, { useEffect, useState } from 'react';
import {
    FaEnvelopeOpen,
    FaUser,
    FaCalendarTimes,
    FaMap,
    FaPhone,
    FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';

function App() {
    const [person, setPerson] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState(null);
    const [value, setValue] = useState(null);

    const fetchPerson = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            if (response.status >= 400) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            const person = data.results[0];

            const { phone, email } = person;
            const { large: image } = person.picture;
            const { first: firstName, last: lastName } = person.name;
            const { password } = person.login;
            const { number, name: street } = person.location.street;
            const { age } = person.dob;

            const newPerson = {
                image,
                phone,
                email,
                name: `${firstName} ${lastName}`,
                street: `${number} ${street}`,
                age,
                password,
            };

            setIsLoading(false);
            setPerson(newPerson);
            setTitle('name');
            setValue(newPerson.name);
        } catch (error) {
            alert(error);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPerson();
    }, []);

    const handleMouseOver = (e) => {
        if (e.target.classList.contains('icon')) {
            const newTitle = e.target.dataset.id;
            const newValue = person[newTitle];
            setTitle(newTitle);
            setValue(newValue);
        }
    };

    return (
        <main>
            <div className='block bcg-black'></div>
            <div className='block'>
                <div className='container'>
                    <img
                        src={person && person.image}
                        alt='random user'
                        className='user-img'
                    />
                    <p className='user-title'>
                        My <span>{title}</span> is
                    </p>
                    <p className='user-value'>{value}</p>
                    <div className='values-list'>
                        <button
                            className='icon'
                            onMouseOver={handleMouseOver}
                            data-id='name'
                        >
                            <FaUser />
                        </button>
                        <button
                            className='icon'
                            onMouseOver={handleMouseOver}
                            data-id='email'
                        >
                            <FaEnvelopeOpen />
                        </button>
                        <button
                            className='icon'
                            onMouseOver={handleMouseOver}
                            data-id='age'
                        >
                            <FaCalendarTimes />
                        </button>
                        <button
                            className='icon'
                            onMouseOver={handleMouseOver}
                            data-id='street'
                        >
                            <FaMap />
                        </button>
                        <button
                            className='icon'
                            onMouseOver={handleMouseOver}
                            data-id='phone'
                        >
                            <FaPhone />
                        </button>
                        <button
                            className='icon'
                            onMouseOver={handleMouseOver}
                            data-id='password'
                        >
                            <FaLock />
                        </button>
                    </div>
                    <button className='btn' onClick={fetchPerson}>
                        {isLoading ? 'loading' : 'random user'}
                    </button>
                </div>
            </div>
        </main>
    );
}

export default App;
