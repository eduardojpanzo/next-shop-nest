import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

import "@/styles/globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { AuthContextProvider } from "@/contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </CartProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
