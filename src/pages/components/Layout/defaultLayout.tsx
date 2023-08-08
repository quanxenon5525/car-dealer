import Footer from "./footer";
import Navbar from "./navbar";
import { Layout } from "antd";

export default function DefaultLayout({ children }: any) {
  return (
    <Layout style={{ minHeight: "100vh", display: "flex" }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </Layout>
  );
}
