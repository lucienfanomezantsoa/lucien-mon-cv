import React from "react";
import "./User.css";

function User() {
    return (
        <div className="user">
            <img src="./images/Lucien2.jpg" alt="User Avatar" className="user__avatar" /> 
            <h1 className="user__name">ANDRIAMBOLOLONA Fanomezantsoa Lucien</h1>
            <p className="user__profession">Développeur Web</p>
            <div className="user__details">
                <p className="user__info">Location: Morondava Centre</p>
                <p className="user__info">
                    Phone: <a href="tel:+261">0342825805</a>
                </p>
                <p className="user__info">
                    Email: <a href="mailto:lucienfanomezantsoa309@gmail.com">lucienfanomezantsoa309@gmail.com</a>
                </p>
                <p className="user__info">Date de naissance: 17 Février 2003</p>
                <p className="user__info">Lieu de naissance: Diego-Suarez</p>
            </div>
        </div>
    );
}

export default User;
