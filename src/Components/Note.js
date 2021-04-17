import React, {useState} from 'react';
import Form from './Form';

const Note = (props) => {
    const[isExpand, setExpand] = useState(false);
    const expandView = () => {
        setExpand(true);
    }
    return (
        <div className="note-container">
           <Form expand={isExpand} setExpandView={expandView} onAdd={props.onAdd}/>
        </div>
      );
}
 
export default Note;
