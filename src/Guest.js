import React from 'react';
import GuestName from './GuestName'
const Guest = props => {
    return(
    <li>
    <GuestName 
    is Editing={props.isEditing}
    handleNameEdits={e=>props.setName(e.target.value)}>
    {props.name}
    </GuestName>
    <label>
        <input 
        type="checkbox" 
        checked={props.isConfirmed} 
        onChange={props.handleConfirmation}/> Confirmed
    </label>
    <button onClick={props.handleToggleEditing}>edit</button>
    <button>remove</button>
    </li>
    )
}

export default Guest;