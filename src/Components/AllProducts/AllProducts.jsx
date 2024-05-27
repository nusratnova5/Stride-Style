import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';

const AllProducts = () => {
    const loaderShoes = useLoaderData();
    const [shoes, setShoes] = useState(loaderShoes);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {shoes?.map(shoe => (
                <SingleProducts propShoe={shoe} allShoes={shoes} setShoes={setShoes} key={shoe.id} />
            ))}
            </div>
        </div>
    );
};

export default AllProducts;