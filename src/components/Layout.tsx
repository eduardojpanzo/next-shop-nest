import { ToastContainer } from "react-toastify";

import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { AuthContextProvider } from "../contexts/AuthContext";

import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <TopBar />
      <NavBar />
      {children}
      <Footer />
    </AuthContextProvider>
  );
}
