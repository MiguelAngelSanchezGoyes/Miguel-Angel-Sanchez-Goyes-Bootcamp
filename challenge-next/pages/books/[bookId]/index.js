import Head from "next/head";
import { useRouter } from "next/router";
import { Detail } from "../../../components/books/detail";
import { Layout } from "../../../components/core/layout";
import { createBookSrv } from "../../../services/books-srv";

export default function BookDetail() {
  const router = useRouter();
  const id = router.query.bookId;
  const book = createBookSrv().getBookData(id);
  return (
    <>
      <Head>
        <title>Book {id} - Learning Next</title>
      </Head>
      <Layout>
        <Detail book={book} />
        <div>
          <button
            onClick={() => {
              // router.push("/books");
              router.back();
            }}
          >
            Back to libros
          </button>
        </div>
      </Layout>
    </>
  );
}
