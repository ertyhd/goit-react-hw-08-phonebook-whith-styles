import style from './registerForm.module.scss';

import useForm from 'shared/useForm';
import TextField from 'components/TextField/TextField';
import initialState from './initialState';
import fields from './fields';
import Button from 'shared/Button/Button';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <form className={style.formReg} onSubmit={handleSubmit}>
      <h1 className={style.hederReg}>Registration form</h1>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <div className={style.btnReg}>
        <Button>Sign up</Button>
      </div>
    </form>
  );
};

export default RegisterForm;
