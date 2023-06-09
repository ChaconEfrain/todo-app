import Tasks from "@/components/Tasks";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-sm m-auto flex flex-col items-center mt-14">
        <h1 className="font-semibold text-3xl">ToDo App</h1>
        <Tasks />
      </main>
    </>
  );
}
