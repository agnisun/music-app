import {GetServerSideProps, NextPage} from "next";
import {getSession, signIn} from "next-auth/react";
import {Box, Button} from "@mui/material";
import Logo from '../public/img/logo.png';
import Image from 'next/image';
import {LoginPage} from "../frontend/styles/global";

const Login: NextPage = () => {
  const handleSignIn = () => signIn('spotify')

  return (
      <LoginPage>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Box width={'180px'} mb={'30px'}>
            <Image src={Logo} alt={''}/>
          </Box>
          <Button variant="main" sx={{width: '100%'}} onClick={handleSignIn}>Sign in</Button>
        </Box>
      </LoginPage>
  );
};

export default Login;

export const getServerSideProps:GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {}
  }
}