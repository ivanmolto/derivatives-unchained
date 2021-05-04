import { createApp, provide, h } from "vue";
import { HttpLink, split } from "@apollo/client/core";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

// Create an http link:
const httpLink = new HttpLink({
  uri: "https://lb.testnet.vega.xyz/query",
})

// Create a Websocket link:
const wsLink = new WebSocketLink({
  uri: "wss://lb.testnet.vega.xyz/query",
  options: {
    reconnect: true,
  },
});

// Using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return ( 
      definition.kind === "OperationDefinition" && 
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

console.log(link);

const defaultClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

// createApp(App).use(store).use(router).mount("#app");
createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient)
  },
  render: () => h(App),
})
  .use(store)
  .use(router)
  .mount("#app");
