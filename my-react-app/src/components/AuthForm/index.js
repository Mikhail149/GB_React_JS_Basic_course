import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import { TextField, Button } from '@mui/material';
import { auth } from '../../firebase'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { assigningCurrentUserAction } from '../../store/profile/action'

export const AuthForm = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [email, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");


  function sendLoginChange(e) {
    setLogin(e.target.value);
  }
  function sendPasswordChange(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      push("/profile");
    } catch (e) {
      setError(e);
    }

  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >

      <TextField label="Введите логин" variant="outlined" type='email' onChange={sendLoginChange} value={email} />
      <br />
      <TextField label="Введите пароль" variant="outlined" type='password' onChange={sendPasswordChange} value={password} />
      <br />
      <Button variant="contained" type="submit">Войти</Button>
    </Box>
  )
}