import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';

const AllProfiles = () => {
    const [profiles, setProfiles] = useState([]);
    useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data=>setProfiles(data))
},[])
    return (
        <div>
            {
                profiles.map( profile=> <Profile profile={profile} key={profile.id}> </Profile>)
            }
        </div>
    );
};

export default AllProfiles;