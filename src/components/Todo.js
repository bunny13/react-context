import { useState } from 'react';
import Modal from './Modal';


function Todo() {
    const [modalClose, setModalClose] = useState(false);

  return (
    <div>
      <h2>Title</h2>
      <div className="actions">
        <button className="btn" onClick={() => setModalClose(true)}>Delete</button>
      </div>
      {modalClose && <Modal modalClose={() => setModalClose(false)}/> }
    </div>
  );
}

export default Todo;
