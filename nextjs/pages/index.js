import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  return (
    <Box
      bgcolor="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <Button onClick={() => router.push('/login')}>Login Page</Button>
    </Box>
  );
};

export default Home;
