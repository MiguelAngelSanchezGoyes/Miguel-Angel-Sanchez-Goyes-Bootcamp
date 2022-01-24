import Head from "next/head";
import Link from "next/link";
import { Card } from "../../components/books/card";
import { Header } from "../../components/books/header";
import { Grid } from "../../components/core/grid";
import { Layout } from "../../components/core/layout";
import { createFilmSrv } from "../../services/films-srv";

export default function Films() {
  const films = createFilmSrv().getAllFilms();
  return (
    <>
      <Head>
        <title>Films - Learning Next</title>
      </Head>
      <Layout>
        <Header />
        <Grid>
          {films.map((item) => (
            <Link href={`/films/${item.id}`} key={item.id}>
              <a>
                <Card years={item.year} title={item.title}></Card>
              </a>
            </Link>
          ))}
        </Grid>
      </Layout>
    </>
  );
}
