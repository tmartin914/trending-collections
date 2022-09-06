import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: 'https://graphql.icy.tools/graphql',
  cache: new InMemoryCache()
});

root.render(
  <ApolloProvider client={client}>
    <App />  
  </ApolloProvider>
);
