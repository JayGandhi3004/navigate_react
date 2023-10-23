import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Three = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            // console.log(res.data);
            setdata(res.data)
        })
    })


    const halfdata = data.slice(10, 5)

    return (
        <div>
            <div>
                {
                    halfdata?.map((val, index) => {
                        return (
                            <>
                                <h1>{val.id}</h1>
                                <h1>{val.title}</h1>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Three
