import {useState} from 'react'

function Form (props){


    // state - a way for us to set and reference data that changes in our component
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")
    
    function handleClick(){
        //console.log(name, URL)
        //alert("Clicked!")
        
        // take the last value of the input and send it to the table 
    
        props.submitFavLink({name, URL})
    }
    function handleNameInputChange(event){
       
        // we can use the event object to look at input
       
        console.log(event.target.value)
        setName(event.target.value)
       
        // save this data for later
    }
    function handleURLInputChange(event){
       
        // we can use the event object to look at input
       
        console.log(event.target.value)
        setURL(event.target.value)
        // save this data for later
    }
    return (
        <div>
            {/* Form for the user to input data*/}
            <form>
                <label> Name </label>
                <input type="text" onChange={handleNameInputChange}/>

                <label> URL </label>
                <input type="text" onChange={handleURLInputChange}/>
            </form>

            <button onClick={handleClick}> Submit </button>
        </div>
    )
}

export default Form