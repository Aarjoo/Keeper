import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';


const Popup = (props) => {

    const [newData, takeNewData] = useState({
        title:props.title,
        content:props.content,
    });

    // const handleValue = (e) => {
    //     document.getElementsByName(e.target.name).value = newData.title;
    // }

    const handleNewData = (event) =>{
        // document.getElementsByName('title').value=newData.title;

        const {name, value} = event.target;
        takeNewData((prev) => {
            return {
                ...prev,
                [name]:value
            };
        });

    }
    
    const setClose = () =>{
        props.changeClose(props.id);
    }

    const getData = (e) => {
        console.log(props.id);
        props.handleEdit(newData,props.id);
        props.changeClose(props.id);
        e.preventDefault();
    }

return ( 
<div className="edit-area">
    <div className="edit-container">
        <form>
        <span className="close-icon" onClick={setClose}><CloseIcon /></span> 
            <input 
                className="textbox textbox-shadow" 
                type="text" 
                name="title" 
                contentEditable="true"
                value={newData.title}
                placeholder="Title"
                // onClick={handleValue}
                onChange={handleNewData}
                autoComplete="off"
                />            
            <br/>
            <textarea 
                className="textbox textarea-shadow"
                rows="3" 
                name="content"
                value={newData.content}
                placeholder="Take a Note"
                onChange={handleNewData}
                autoComplete="off"
            >
            </textarea>        
            <br/>  
            <button type="submit" className="edit-btn" onClick={getData}>Save</button>
                 
        </form>
    </div>
</div>        
     );
}
 
export default Popup;