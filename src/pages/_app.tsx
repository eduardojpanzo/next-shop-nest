import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

import "@/styles/globals.css";
import { CartProvider } from "@/contexts/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </CartProvider>
    </ApolloProvider>
  );
}

export default MyApp;
