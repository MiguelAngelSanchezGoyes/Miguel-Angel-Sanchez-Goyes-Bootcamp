import Head from "next/head";
import { useRouter } from "next/router";
import { Detail } from "../../../components/books/detail";
import { Layout } from "../../../components/core/layout";
import { createBookSrv } from "../../../services/books-srv";

export default function BookDetail({ book }) {
  const router = useRouter();
  // const id = router.query.bookId;
  // const book = createBookSrv().getBookData(id);
  return (
    <>
      <Head>
        <title>Book {book.id} - Learning Next</title>
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

export async function getStaticProps(context) {
  const id = context.params.bookId;
  const book = createBookSrv().getBookData(id);
  console.log(id, book);
  return {
    props: {
      book,
    },
  };
}

export function getStaticPaths() {
  const allIds = createBookSrv().getAllIdBooks();
  const paths = allIds.map((item) => {
    return { params: { bookId: String(item) } };
  });
  return {
    paths,
    fallback: false,
  };
}
