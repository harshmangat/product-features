import Button from '../UI/Button';
import classes from './Form.module.css';
import Input from './Input';

const Form = () => {
  return(
    <form className={classes.form}>
     <Input />
      <Button />
    </form>
  );
};

export default Form;
