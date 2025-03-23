// import React from 'react';
import './usercard.css';

const Usercard = () => {
    const profilePhoto = "https://i.pinimg.com/736x/6f/cf/80/6fcf8083163eb167660a4a1dc182fa30.jpg";
    const name = "Namra";
    const email = "namra@allofusaredead.com";
    const phoneNumber = "1276-543-210";
    const address = "Zombie High School, Hyosan, South Korea";

    return (
        <div className="user-card">
            <div className="image-container">
                <img src={profilePhoto} alt="Profile" className="profile-image" />
            </div>
            <h2 className="user-name">{name}</h2>
            <div className="user-details">
                <p className="user-info email">{email}</p>
                <p className="user-info phone">{phoneNumber}</p>
                <p className="user-info address">{address}</p>
            </div>
        </div>
    );
};

export default Usercard;