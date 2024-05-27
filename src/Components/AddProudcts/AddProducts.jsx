import React from 'react';
import Swal from 'sweetalert2';

const AddProducts = () => {
    const addProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const requestBody = {
            id: id,
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
            confirmButtonText: "Add"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:3000/shoes', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire({
                            text: "Product added successfully.",
                            icon: "success"
                        });
                        form.reset();
                    })
            }
        });

    }
    return (
        <div className=''>
            <form onSubmit={addProduct}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">ID</span>
                    </div>
                    <input type="text" name='id' placeholder="ID" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Title</span>
                    </div>
                    <input type="text" name='title' placeholder="Title" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Brand</span>
                    </div>
                    <input type="text" name='brand' placeholder="Brand" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Price</span>
                    </div>
                    <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Description</span>
                    </div>
                    <input type="text" name='description' placeholder="Description" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Image Url</span>
                    </div>
                    <input type="text" name='image_url' placeholder="Image Url" className="input input-bordered w-full" />
                </label>

                <div>
                    <button type='submit' className="btn bg-lime-600 mt-5 text-white text-xl">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;