
import {useState} from 'react';
import Msg from './msg.js';


function Todo(props) {

    const [MsgIsOpen,setMsgIsOpen] = useState(false);

    function deleteHandler()
    {
        setMsgIsOpen(true);    
    }

    function closeMsg()
    {
        setMsgIsOpen(false);
    }

    return (
        
        <div className="div1" class="div1">
            
            <h2>{props.title}</h2>
            <button className="Dbtn" onClick={deleteHandler}>Delete</button>
            {MsgIsOpen? <Msg onCancel={closeMsg}/> : null}

        </div>

    );


}


export default Todo;