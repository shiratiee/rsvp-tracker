import React from 'react';
import Guest from './Guest'

const GuestList = props => {
    return(
    <ul>
    {props.guests.map((guest, index)=>
        <Guest 
            key={index} 
            name={guest.name} 
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation ={event => props.toggleConfirmationAt(index)}
            handleToggleEditing={event => props.toggleEditingAt(index)} 
            setName={text => props.setNameAt(text,index)}/>
    )}
   </ul>
    )
}

export default GuestList;