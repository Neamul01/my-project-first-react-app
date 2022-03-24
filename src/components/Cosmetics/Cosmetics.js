import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => fetch('data.json').then(res => res.json()).then(data => setCosmetics(data)), []);



    return (
        <div className='cosmetics'>
            <h2>Order Now</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetics={cosmetic} key={cosmetic.id}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;