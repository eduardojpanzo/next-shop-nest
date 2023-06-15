import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_HYGRAPH_API,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_QUERY_TOKEN}`,
      },
    }),
  });
});
