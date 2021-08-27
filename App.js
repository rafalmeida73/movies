import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/navigations/DrawerNavigation.js";
import { Provider } from 'react-redux'
import { Store } from "./src/store/store";

export default function App() {
  
  return (
    <>
      <Provider store={Store}>
          <Routes />
          <StatusBar style="inverted" />
      </Provider>
    </>
  );
}