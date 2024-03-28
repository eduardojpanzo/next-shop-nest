
import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <>
      <TopBar />
      <NavBar />
      {children}
      <Footer />
      </>
  );
}
