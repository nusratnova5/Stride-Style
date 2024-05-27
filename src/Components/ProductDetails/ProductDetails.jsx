import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const shoe = useLoaderData();
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={shoe?.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{shoe?.title}</h2>
                <p>{shoe?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;