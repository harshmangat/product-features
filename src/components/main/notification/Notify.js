import Modal from "../../UI/Modal";

import classes from "./Notify.module.css";

const Cart = (props) => {
  let {onClose} = props
  return (
    <Modal onClose={props.onClose} >
        <h5>Are You Sure Wanna Dislike It?</h5>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
