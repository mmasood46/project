import React, {useEffect, useState} from 'react'

const UseEffectReact = () => {    
    const[posts, setPosts] = useState([]);
    

    useEffect(()=>{
        const postsData = () =>{        
            fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(data=>setPosts(data))            
        }
        postsData();
    })

  return (
    <div>
        <h1>UseEffects in React Js</h1>
        {
            posts.map(singlePost=>{
                const {image, title, description} = singlePost
                return(
                    <div style={{width: '350px', border: '1px solid red', margin: '10px'}}>
                        
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

export default UseEffectReact

// ======================


// import React, {useEffect, useState} from 'react'

// const UseEffectReact = () => {    
//     const[posts, setPosts] = useState([]);

//     let urlPosts = "https://jsonplaceholder.typicode.com/posts"

//     const postsData = () =>{        
//         fetch(urlPosts)
//         .then(res=>res.json())
//         .then(data=>setPosts(data))
        
//     }

//     useEffect(()=>{
//         postsData();
//     })



//   return (
//     <div>
//         <h1>UseEffects in React Js</h1>
//         {
//             posts.map(singlePost=>{
//                 return(
//                     <>
//                         <h3>{singlePost.id}</h3>
//                         <h3>{singlePost.title}</h3>
//                         <h3>{singlePost.body}</h3>
//                         <hr />
//                     </>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default UseEffectReact



// const postsData = () =>{
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // }
