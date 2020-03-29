import React from "react";
import ReactDOM from "react-dom";

import Detail from "./Detail";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Detail
    title="Steering wheel"
    imageSrc="https://loremflickr.com/cache/resized/65535_49446817897_9ce434b2e8_c_800_240_g.jpg"
    description="this is description this is description this is description this is description this is description this is description this is description "
  />,
  rootElement
);
