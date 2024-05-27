import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleProducts = ({ propShoe, setShoes, allShoes }) => {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/shoes/${propShoe.id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire({
                            text: "Product deleted successfully.",
                            icon: "success"
                        });

                        const remainingShoes = allShoes.filter(singleShoe => singleShoe.id != propShoe.id);
                        setShoes(remainingShoes);
                    })
            }
        });
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={propShoe?.image_url} alt="Shoes" className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{propShoe?.title}</h2>
                <p>{propShoe?.description}</p>
                <div className="card-actions">
                    <button onClick={handleDelete} className="btn btn-error bg-red-900 text-white">Delete</button>
                    <Link to={`/dashboard/edit-product/${propShoe.id}`} className="btn bg-orange-500">Edit</Link>
                    <Link to={`/dashboard/product-details/${propShoe.id}`} className="btn bg-lime-300">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;