// https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98

import './App.css';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

function App() {

  const yupSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })

  const {register, reset, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(yupSchema),
  })

  const onSubmitHandle = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        <input 
        {...register('email')}
          placeholder='type email'
          type='email'
          required
        />
        <p>{errors.email?.message}</p>
        <br/>
        <input
        {...register('password')}
          placeholder='type password'
          type='password'
          required/>
          <p>{errors.password?.message}</p>
          <br />
        <button type='submit'>Submit</button>

      </form>
    </div>
  );
}

export default App;
