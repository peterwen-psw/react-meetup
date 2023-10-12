function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>你确定吗</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        取消
      </button>
      <button className="btn" onClick={confirmHandler}>
        确定
      </button>
    </div>
  );
}
export default Modal;
 