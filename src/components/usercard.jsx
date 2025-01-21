// write the component code here
import React from 'react';

const Usercard = ()=>{
    const profilePhoto = "https://i.pinimg.com/736x/6f/cf/80/6fcf8083163eb167660a4a1dc182fa30.jpg";
    const name = "Namra";
    const email = "namra@allofusaredead.com";
    const phoneNumber = "1276-543-210";
    const address = "Zombie High School, Hyosan, South Korea";

    return(
        <div className="user-card">
            <img src = {profilePhoto} alt="Profile" style={{ width: "300px", height: "300px" }}/>
                <h2 >{name}</h2>
                <p>{email}</p>
                <p >{phoneNumber}</p>
                <p>{address}</p>
        </div>
    )
}
export default Usercard;
