import React from 'react'

const Difference = () => {
  return (
    <>
<h2> The difference between three approaches is</h2>
<ul>
    <li>
        AxiosApproach
        <ul>
            <li>It is considered to be the best approach among all approaches to fetch the data from APIs</li>
            <li>It has inbuilt crud operations</li>
            <li>It saves time and reduces the need to convert data into json format by ourselves.it automatically converts the data into json</li>
            <li>It needs an external library to be installed</li>
        </ul>
    </li>
    <li>
        FetchAPI
        <ul>
            <li>it returns promises and the data needs to be converted to json format by ourselves</li>
            <li>it is also widely used.</li>
            <li>it needs .then method to convert data to json</li>
        </ul>
    </li>
    <li>
       Async Await approach
        <ul>
            <li>async and await make promises easier to write</li>
            <li>async makes a function return a Promise</li>
            <li>await makes a function wait for a Promise</li>
     
        </ul>
    </li>
</ul>

    </>
  )
}

export default Difference