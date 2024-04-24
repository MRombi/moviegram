import Head from "next/head";
import MovieSearch from "./components/MovieSearch";
import Image from "next/image";
export default function Home() {
  return (
    <div className=" bg-black min-h-screen">
      <Head>
        <title>MovieGram</title>
        <meta name="description" content="movie finder" />
      </Head>
      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-white">MovieGram</h1>
        <p className="text-xl font-bold mb-8 text-white text-center">
          If a movie has no picture a random mythical creature might appear.
          <br />
          Will you be able to find it?
        </p>
      </main>
      <MovieSearch />
    </div>
  );
}
