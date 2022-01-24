import Head from "next/head";
import { useRouter } from "next/router";
import { Detail } from "../../../components/books/detail";
import { Layout } from "../../../components/core/layout";
import { createFilmSrv } from "../../../services/films-srv";

export default function FilmDetail() {
  const router = useRouter();
  const id = router.query.filmId;
  const film = createFilmSrv().getFilmData(id);
  return (
    <>
      <Head>
        <title>Film {id} - Learning Next</title>
      </Head>
      <Layout>
        <Detail film={film} />
        <div>
          <button
            onClick={() => {
              router.back();
            }}
          >
            Back to films
          </button>
        </div>
      </Layout>
    </>
  );
}
