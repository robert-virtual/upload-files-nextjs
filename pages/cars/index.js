import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Cars({ cars }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Cars</title>
      </Head>
      <h1>cars</h1>
      {cars.map(({ name, image }, i) => (
        <div key={i.toString()}>
          <h2>{name}</h2>
          <Image src={image} alt={name} width={500} height={300} />
          <br />
          <button onClick={() => router.push(`/cars/${name}`)}>{name}</button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const cars = await res.json();
  return {
    props: {
      cars,
    },
  };
}
