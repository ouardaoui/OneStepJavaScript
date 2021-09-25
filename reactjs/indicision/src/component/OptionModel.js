import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectoption}
    contentLabel="selected option"
    onRequestClose={props.handleselectoption}
    className="modal"
    >
        <h3 className="modal__title">selected option</h3>
        {props.selectoption &&<p className="modal__body">{props.selectoption}</p>}
        <button className="button" onClick={props.handleselectoption}>okey</button>
    </Modal>    

);
 
export default OptionModal ;