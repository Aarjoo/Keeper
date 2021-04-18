import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import DisplayNotes from './DisplayNotes';
import Popup from './Popup';

function App() {
  var idOfEditItem;
  const [notes, setNotes] = useState([]);
  const[popup, enablePopup] = useState(false);
  const[data,takeData] = useState({
    id:0,
    title:"",
    content:""
  });
    
    const addNote = (noteText) => {
        setNotes((prev) => {
            return [...prev, noteText];
        });
        // console.log(notes);
    }

    const deleteNote = (id) =>
    {
      setNotes((prev) => {
        return (
          prev.filter((d,index) => {
            return index!==id;
          })
        );
      });
    }
    const setPopup = (id) =>{
      idOfEditItem = id;
      enablePopup((prev)=> {
        return !prev;
      });
      const item = notes.filter((d1,index) => {
        return index===id;
      });
      console.log(idOfEditItem);
      const actualData = item[0];
      actualData.id=id;
      console.log(actualData);
      takeData(actualData); 
    }
    const editData = (newData, id) => {
      notes.splice(id,1,newData);
    }


  return (
    <div>
    <Header />
    <Note onAdd={addNote}/>
    <div className="notes-row">
    {notes.map((data, index) => {
      return(
        <DisplayNotes 
        key={index}
        id={index}
        title={data.title}
        content={data.content}
        deleteFun={deleteNote}
        setPopup={setPopup}
        />)
    })} 
    </div>
   
    {popup?<Popup 
          
          id={data.id}
          title={data.title}
          content={data.content}
          handleEdit={editData}
          changeClose={setPopup}
    />:""}
    
    <Footer />
    </div>
  );
}

export default App;
