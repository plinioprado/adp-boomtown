// import { FirebaseAuth } from './firebase';
// import ApolloClient, { createNetworkInterface } from 'apollo-client';

// const networkInterface = createNetworkInterface({
//   uri: 'http://localhost:4400/graphql'
// });

// networkInterface.use([{
//   applyMiddleware(req, next) {

//     if (!req.options.headers) {
//       req.options.headers = {};
//     }

//         FirebaseAuth.currentUser.getIdToken(true).then((token) => {
//           req.options.headers['Authorization'] = token;
//           next();
//         });
//   }
// }]);

// const apolloClient = new ApolloClient({
//   networkInterface
// });

// export default apolloClient;


import ApolloClient, { createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4400/graphql'
});
const client = new ApolloClient({ networkInterface });
export default client;
