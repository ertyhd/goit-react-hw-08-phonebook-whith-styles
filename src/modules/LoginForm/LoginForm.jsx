import style from './loginForm.module.css';

import useForm from 'shared/useForm';
import TextField from 'components/TextField/TextField';
import initialState from './initialState';
import fields from './fields';
import Button from 'shared/Button/Button';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form className={style.formLog} onSubmit={handleSubmit}>
      <h1 className={style.hederLog}>Login form</h1>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <div className={style.btnLog}>
        <Button>Sign in</Button>
      </div>
    </form>
  );
};

export default LoginForm;
