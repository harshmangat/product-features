import Card from "../UI/Card";
import classes from "./Post.module.css";

const Post = (props) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <section className={classes.post}>
      <Card>
        <p>{props.title}</p>
        <div>
          <span>
            {year}-{month < 10 ? `0${month}` : `${month}`}-{date}
          </span>
        </div>
        <div className={classes.buttons}>
          <button>👍</button>
          <b>10</b>
          <button>👎</button>
        </div>
      </Card>
    </section>
  );
};

export default Post;
