// Components are functions that return some JSX

//JSX is a javascript syntax in React to create our HTML

"use client";

import { useState } from "react" //we use this to add state to our component
// state lets us keep track of changing data and show it in the component 

import Form from "./components/Form"
import Table from "./components/Table"
function HomePage(){
    const[newFavLink, setNewFavLink] = useState({})

    function handleNewFavLink(favLink){
        //favlink is an object containing a {name, URL}

        console.log(favLink, "in HomePage")
        setNewFavLink(favLink)
    }
    
    //create some state keeping track of the changing event 
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>FavLinks</h1>

    {/* The form is responsible for gathering the data
        and alerting the HomePage when it needs to pass it to the table*/}
            
            <Form submitFavLink={handleNewFavLink}/>



            <Table data={newFavLink}/>

        </div>
    )
}
export default HomePage