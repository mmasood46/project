import React, {useEffect, useState} from 'react'

const AsyncAwait = () => {  

    const[posts, setPosts] = useState([]);

    const postsData = async() =>{ 
        
        let result = await fetch("https://fakestoreapi.com/products")
        result = await result.json();        
        setPosts(result)        
    }

    useEffect(()=>{
        
        postsData();
    })

  return (
    <div>
        <h1>Async Await in React Js</h1>
        {
            posts.map(singlePost=>{
                const {image, title, description} = singlePost
                return(
                    <div style={{width: '350px', border: '3px solid red', margin: '20px auto', borderRadius: '12px'}}>
                        
                        <img src={image} width={250} height={300} />
                        <h3>{title}</h3>
                        <h3>{description}</h3>
                        <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default AsyncAwait