import { Inter } from "next/font/google";
import Stack from "react-bootstrap/Stack";
import CarSlideShow from "./components/Home/CarSlideShow";
import CarIntroduction from "./components/Home/CarIntroduction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-white`}
    >
      <Stack>
        <CarSlideShow />
        <CarIntroduction />
      </Stack>
    </main>
  );
}
