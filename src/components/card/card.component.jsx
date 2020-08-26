import React from 'react';
import '../card/card.styles.css';

export const Card = (props)=>(
    <div className = 'card'>
        <img alt = "monsters" src = {`https://robohash.org/${props.monster.id}&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);