import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const shoe = useLoaderData();
    return (
        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={shoe?.image_url} alt="Shoes" className="rounded-xl h-80" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{shoe?.title}</h2>
                <div className='flex gap-10'>
                    <div>
                        <span className='font-bold'>Brand: </span>
                        <span>{shoe?.brand}</span>
                    </div>
                    <div>
                        <span className='font-bold'>Price: </span>
                        <span>{shoe?.price}</span>
                    </div>
                </div>
                <p>{shoe?.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;