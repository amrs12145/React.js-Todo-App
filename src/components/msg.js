
function Msg(props) {
    
    function cancelHandler() {
        props.onCancel();
    }

    return (
        <div className="backdrop" onClick={cancelHandler}>

            <div className="div2">
                <h3>Are u sure?</h3>
                <div className="div3">
                    <button className="Conbtn">Confirm</button>
                    <button className="Canbtn" onClick={cancelHandler}>Cancel</button>
                </div>
            </div>

        </div>
    );

}

export default Msg;