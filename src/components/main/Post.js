import Card from "../UI/Card";
import classes from "./Post.module.css";

// const defaultState = { vote: 0 };

// const reducer = (state, action) => {
//   if (action.type === "ADD") {
//     return { vote: state.vote + 1 };
//   }
//   if (action.type === "REMOVE") {
//     return { vote: state.vote - 1 };
//   }
// };

const Post = (props) => {
  let { dispatch, data, onShowConfirm } = props;
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <section className={classes.post}>
      <Card>
        <p className={classes.para}>{data.title}</p>
        <div>
          <span>
            {year}-{month < 10 ? `0${month}` : `${month}`}-{date}
          </span>
        </div>
        <div className={classes.buttons}>
          <button onClick={() => dispatch({ type: "upvote", postId: data.id })}>
            👍
          </button>
          <b>{data.votes}</b>
          <button
            onClick={() => dispatch({ type: "downvote", postId: data.id }), onShowConfirm}
            
          >
            👎
          </button>
        </div>
      </Card>
    </section>
  );
};

export default Post;
