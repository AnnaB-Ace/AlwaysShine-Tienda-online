import React from 'react'
import "./Modal.css"
import Divider from "./Divider"
import MyButton from "./MyButton"

const Modal = ({visible, title, children, onClickButton}) => {
    return visible && (<div className="backdrop">
    <div className="card my-card">
        <div className="modal-title-content">
            <span className="modal-title">{title}</span>
        </div>
        <Divider/>
        {children}
        <Divider/>
        <br/>
        <MyButton label="Aceptar" onClick={onClickButton}/>
    </div>
</div>)
}

export default Modal;