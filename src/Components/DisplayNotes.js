import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const DisplayNotes = (props) => {

    const deleteNote = () =>{
        props.deleteFun(props.id);
    }
    const enableEdit = () =>{
        props.setPopup(props.id);
        
    }
    return ( 
        <div className="displayNotes">
            <h2>{props.title ? props.title : "Title"}</h2>
            <p>{props.content}</p>
            <div className="btn-area">
                <button className="short-btn" onClick={deleteNote}><DeleteIcon /></button>
                <button className="short-btn" onClick={enableEdit}><EditIcon /></button>
            </div>          
        </div>
     );
}
 
export default DisplayNotes;