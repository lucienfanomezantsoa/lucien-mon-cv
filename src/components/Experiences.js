import React from "react";

function Experiences ({ datas }) {
    return (
        <div className="cursus mb3">
            <h2 className="h2">Experiences Professionnelle</h2>
            {datas.map(item => (
                <div className="grid__row">
                <div className="grid__item">
                <p className="grid__date">{item.date}</p>
                </div>
                <div className="grid__item">
                    <h3  className="grid__title">{item.title}</h3>
                    <p className="grid__location">{item.location}</p>
                </div>
            </div>

            
) )}
            
        </div>
    )
}

export default Experiences