import Head from "next/head";
import { Layout } from "../components/core/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Learning Next</title>
      </Head>
      <Layout>
        <div>Home</div>
      </Layout>
    </>
  );
}
