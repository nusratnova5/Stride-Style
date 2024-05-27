import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProduct = () => {
    const shoe = useLoaderData();

    const [title, setTitle] = useState(shoe.title);
    const [brand, setBrand] = useState(shoe.brand);
    const [price, setPrice] = useState(shoe.price);
    const [description, setDescription] = useState(shoe.description);
    const [image_url, setImage] = useState(shoe.image_url);

    const editProduct = (e) => {
        e.preventDefault();

        const form = e.target;

        const requestBody = {
            title: title,
            brand: brand,
            price: price,
            description: description,
            image_url: image_url,
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Edit"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/shoes/${shoe.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire({
                            text: "Product edited successfully.",
                            icon: "success"
                        });

                        setTitle('');
                        setBrand('');
                        setPrice('');
                        setDescription('');
                        setImage('');
                    })
            }
        });

    }
    return (
        <div>
            <form onSubmit={editProduct}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Title</span>
                    </div>
                    <input type="text" name='title' onChange={(e) => setTitle(e.target.value)}  defaultValue={title} placeholder="Title" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Brand</span>
                    </div>
                    <input type="text" name='brand' onChange={(e) => setBrand(e.target.value)}  defaultValue={brand} placeholder="Brand" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Price</span>
                    </div>
                    <input type="text" name='price' onChange={(e) => setPrice(e.target.value)}  defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Description</span>
                    </div>
                    <input type="text" name='description' onChange={(e) => setDescription(e.target.value)}  defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Image Url</span>
                    </div>
                    <input type="text" name='image_url' onChange={(e) => setImage(e.target.value)}  defaultValue={image_url} placeholder="Image Url" className="input input-bordered w-full" />
                </label>

                <div>
                <button type='submit' className="btn bg-lime-600 mt-5 text-white text-xl">Update</button>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;