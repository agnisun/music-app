import type {GetServerSideProps, NextPage} from 'next'
import {getSession, signOut} from "next-auth/react";
import {Page} from "../frontend/styles/global";

const Home: NextPage = () => {
  return (
    <Page>
      <button onClick={() => signOut()}>sign out</button>
    </Page>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

