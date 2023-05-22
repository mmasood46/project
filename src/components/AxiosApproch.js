import React, { useEffect, useState } from 'react'
import Axios from 'axios'



const AxiosApproach = () => {
    const [posts, setPosts] = useState([]);



    useEffect(() => {
        const postsData = () => {
            Axios.get("https://fakestoreapi.com/products")
                .then(response => { setPosts(response.data) })
        }
        postsData();
    }, [])
    return (
        <div>
            <h1 className='text-center text-primary display-2 fw-bold'>Axios Approach</h1>
                        <div className="container">
                            <div className="row">
            {
                posts.map((x, key) => {
                    const { image, title, description, category,price } = x;
                    if(category=="men's clothing" ||category=="electronics" )
                    return (
                     
                            <div className="card m-2 p-4" style={{ width: "18rem" }} key={key}>
                                    <img src={image} className="card-img-top" alt="..." height={250} />
                                    <div className="card-body">
                                        <h5 className="card-title">{title.slice(0,20)}</h5>
                                        <p className="card-text">{description.slice(0,60)}....</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Category: {category.charAt(0).toUpperCase() + category.slice(1)}</li>
                                        <li className="list-group-item">Price : ${price}</li>
                                    </ul>
                                    <div className="card-body">
                                        <a href="#" className="card-link btn btn-outline-primary">Shop now</a>
                                    </div>
                                </div>
                    )
                })
            }
            </div>
        </div>
        </div>
    )
}

export default AxiosApproach