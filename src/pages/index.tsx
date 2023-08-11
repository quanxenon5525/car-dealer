import Head from "next/head";
import Stack from "react-bootstrap/Stack";
import CarCard from "../../components/Home/CarCard";
import CarIntroduction from "../../components/Home/CarIntroduction";
import CarSlideShow from "../../components/Home/CarSlideShow";
import CarType from "../../components/Home/CarType";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mercedes-Benz</title>
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>
      <main>
        <Stack>
          <CarSlideShow />
          <CarIntroduction />
          <CarCard />
          <CarType />
        </Stack>
      </main>
    </div>
  );
}
