import React from 'react';
import { addToDb, removeFromDb } from '../../fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, id, price } = props.cosmetics;

    // const buyNow = (id) => {
    //     addToDb(id)
    // }

    return (
        <div className='cosmetic'>
            <h2>Buy this: {name} </h2>
            <p>Only for: <b>$</b> {price}</p>
            <p>This is id: <small>{id}</small> </p>
            <button onClick={() => addToDb(id)}>Buy Now</button>
            <button onClick={() => removeFromDb(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;