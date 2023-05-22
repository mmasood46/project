import React, {useEffect, useState} from 'react'
import Axios from 'axios';


const AxiosApproach = () => {  

    const[posts, setPosts] = useState([]);

   

    useEffect(()=>{
        const postsData = () =>{         
            Axios.get("https://fakestoreapi.com/products")
            .then(response=>{setPosts(response.data)})                
        }        
        postsData();
    },[])

  return (
    <div>
        <h1>Axios in React Js</h1>
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

export default AxiosApproach