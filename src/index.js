import { AppRegistry, Platform } from "react-native";

import App from "./App";

if (Platform.OS === "android") {
  require("react-native-get-random-values");
}

AppRegistry.registerComponent("matchimals", () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication("matchimals", {
    rootTag: document.getElementById("root"),
  });
}
