import Stack from "react-bootstrap/Stack";
import CarSlideShow from "./components/Home/CarSlideShow";
import CarIntroduction from "./components/Home/CarIntroduction";
import Head from "next/head";

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
          <div style={{ backgroundColor: "black" }}>
            <CarIntroduction />
          </div>
        </Stack>
      </main>
    </div>
  );
}
