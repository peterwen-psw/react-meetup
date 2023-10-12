import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        {/* 传函数，不传函数调用 */}
        {/* 两种写法，一种不传参，一种可以传参 */}
        {/* <button className="btn" onClick={deleteHandler}> 不能传参 */}
        <button
          className="btn"
          onClick={() => {
            deleteHandler();
          }}>
          Delete
        </button>
        {/* 这个可以传 */}
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
