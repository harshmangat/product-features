import { useReducer } from "react";
import Card from "../UI/Card";
import classes from "./Post.module.css";

const defaultState = { vote: 0 };

const reducer = (state, action) => {
  if (action.type === "ADD") {
    return { vote: state.vote + 1 };
  }
  if (action.type === "REMOVE") {
    return { vote: state.vote - 1 };
  }
};

const Post = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  // let vote = state.vote
  // vote.sort((a,b)=>{
  //   return a.vote - b.vote
  // })

  return (
    <section className={classes.post}>
      <Card>
        <p className={classes.para}>{props.title}</p>
        <div>
          <span>
            {year}-{month < 10 ? `0${month}` : `${month}`}-{date}
          </span>
        </div>
        <div className={classes.buttons}>
          <button onClick={() => dispatch({ type: "ADD" })}>👍</button>
          <b>{state.vote}</b>
          <button onClick={() => dispatch({ type: "REMOVE" })}>👎</button>
        </div>
      </Card>
    </section>
  );
};

export default Post;
