function Modal(props) {
    return (
        <div>
            <h1>Are you sure want to delete?</h1>
            <button onClick={props.modalClose}>Cancel</button>
            <button>Confirm</button>
        </div>
    );
}

export default Modal;