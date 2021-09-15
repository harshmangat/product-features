import Modal from "../../UI/Modal";

import classes from "./Notify.module.css";

const Notify = (props) => {
  let { onClose, dispatch, data } = props;
  return (
    <Modal onClose={props.onClose}>
      <h5>Are You Sure Wanna Dislike It?</h5>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => {
            dispatch({ type: "downvote", postId: data.id });
            onClose();
          }}
        >
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default Notify;
