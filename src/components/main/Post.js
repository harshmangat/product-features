import Card from "../UI/Card";
import classes from "./Post.module.css";

const Post = (props) => {
  const Dummy = {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too",
  };
  return (
    <section className={classes.post}>
      {props.features.map(feature=>(
        <Card
        >
        <p>{feature.text}</p>
        <span>Mon 2021-09-06</span>
        <div className={classes.buttons}>
          <button>👍</button>
          <b>10</b>
          <button>👎</button>
        </div>
      </Card>
      ))}
      
    </section>
  );
};

export default Post;
