import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
const Form = (props) => {
    const [noteText, setNoteText] = useState({
        title:"",
        content:""
    });
    const takeNote = (e) => {
        const {name, value} = e.target;
        setNoteText((prev) => {
            return {
                ...prev,
                [name]:value
            }
        });
        
    }
    const submitNote = (e) => { 
       props.onAdd(noteText);
       setNoteText({
           title:"",
           content:""
       });
       e.preventDefault();        
    }

    const changeIsExpand = () => {
        props.setExpandView();
    }

    return(
        <form onSubmit={submitNote}>
        <input 
            className={props.expand?"textbox textbox-shadow":"textbox before-expand"} 
            type="text" 
            name="title" 
            value={noteText.title}
            placeholder={props.expand?"Title":"Take a Note"}
            autoComplete="off"
            onClick={changeIsExpand}
            onChange={takeNote}
            />            
        <br/>
        {props.expand?
        <textarea 
            className="textbox textarea-shadow"
            rows="3" 
            name="content" 
            value={noteText.content}
            placeholder="Take a Note"
            autoComplete="off"
            onChange={takeNote}
        >
        </textarea> :""
        }
        <br/>  
        {props.expand?<Zoom in={true}><button 
            type="submit" 
            className="btn">
            <AddIcon />
        </button></Zoom>:" "}       
        
    </form>
    );
}
export default Form;