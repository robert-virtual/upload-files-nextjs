import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Car({ car }) {
  const router = useRouter();
  const name = router.id;
  console.log(router);
  return (
    <div>
      <Head>
        <title>{car.name}</title>
      </Head>
      <h1>car {car.name}</h1>
      <Image src={car.image} alt={car.name} width={500} height={300} />
      <p>{name}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/${params.id}.json`);
  const car = await res.json();
  return {
    props: {
      car,
    },
  };
}
/*
export async function getStaticProps({ params }) {
  //tell next to pre-render page
  console.log(params);
  // http://localhost:3000/cars/tesla
  const res = await fetch(`http://localhost:3000/${params.id}.json`);
  const car = await res.json();
  return {
    props: {
      car,
    },
  };
}

export async function getStaticPaths() {
  // how next knows which dynamics pages to render
  const res = await fetch(`http://localhost:3000/cars.json`);
  const data = await res.json();
  const paths = data.map(({ name }) => {
    return {
      params: {
        id: name,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
*/
