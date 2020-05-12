import React from 'react';


const AddUser:React.FC = ()=>{
    return(
        <div>
            <form>
                <label>Name:</label>
                <input type="text"/><br></br>
                <label>PhoneNumber:</label>
                <input type="text"></input>
            </form>
        </div>
    )
}