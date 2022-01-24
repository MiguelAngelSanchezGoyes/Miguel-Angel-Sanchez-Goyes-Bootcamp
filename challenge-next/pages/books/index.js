import Head from "next/head";
import Link from "next/link";
import { Card } from "../../components/books/card";
import { Header } from "../../components/books/header";
import { Grid } from "../../components/core/grid";
import { Layout } from "../../components/core/layout";
import { createBookSrv } from "../../services/books-srv";

export default function Books() {
  const books = createBookSrv().getAllBooks();
  return (
    <>
      <Head>
        <title>Books - Learning Next</title>
      </Head>
      <Layout>
        <Header />
        <Grid>
          {books.map((item) => (
            <Link href={`/books/${item.id}`} key={item.id}>
              <a>
                <Card authors={item.authors} title={item.title}></Card>
              </a>
            </Link>
          ))}
        </Grid>
      </Layout>
    </>
  );
}
