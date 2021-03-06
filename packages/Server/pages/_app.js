import App, { Container } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../apollo/withApollo";
import React from 'react'

if(typeof window !== 'undefined') {
  window['React'] = React
}
class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
