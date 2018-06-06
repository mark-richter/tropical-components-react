import React from "react";
import { configure, addDecorator, setAddon } from "@storybook/react";
import Container from "./Container";

import { setOptions } from "@storybook/addon-options";

//import "../libs/materialkit/material-kit.js";

setOptions({
  name: "Tropical Components",
  url: "localhost:9001",
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: false
});

addDecorator(story => <Container story={story} />);

function loadStories() {
  require("../stories/index.js");
  // You can require as many stories as you need.
}

configure(loadStories, module);
