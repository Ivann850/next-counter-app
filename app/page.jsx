// Components are functions that return some JSX

//JSX is a javascript syntax in React to create our HTML

"use client";

import { useState } from "react" //we use this to add state to our component
// state lets us keep track of changing data and show it in the component 

import Form from "./components/Form"
import Table from "./components/Table"
function HomePage(){
    
    //create some state keeping track of the changing event 
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>FavLinks</h1>

            <Form />
            <Table />

        </div>
    )
}
export default HomePage