import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [record, setRecord] = useState({});
  const router = useRouter();
  const handleRecord = (e) => {
    const { name, value } = e?.target;
    setRecord({ ...record, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/login', {
        identifier: record.username,
        password: record.password,
      });
      router.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
    >
      <TextField
        onChange={(e) => handleRecord(e)}
        value={record.username ?? ''}
        name={'username'}
      />
      <Box p={2} />
      <TextField
        onChange={(e) => handleRecord(e)}
        value={record.password ?? ''}
        name={'password'}
        type="password"
      />
      <Box p={2} />
      <Button onClick={handleSubmit}>Login</Button>
    </Box>
  );
};

export default Login;
