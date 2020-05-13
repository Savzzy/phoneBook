import React from 'react';
import ReactDOM from 'react-dom';


const Modal:React.FC=(props)=>{
    return (
        ReactDOM.createPortal(props.children,document.getElementById('modal') as Element)
    );
}

export default Modal;