import React, { useState } from "react";

export default function FetchApi() {

    const [data, setData ] = useState([])

    const apiGet = () => {

        fetch('http://localhost:8080/public/authenticate')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        })
    }

  return (
    <>
        <div>TakeCare API</div>
        <button onClick={ apiGet }>Fetch API</button>
        {JSON.stringify(data)}
    </>
  )
}