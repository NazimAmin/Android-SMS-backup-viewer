/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
//only for development
// run storybook with yarn run storybook
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Bubble } from "../Components/Bubble";
storiesOf("ChatView", module)
  .add("chat bubble short", () =>
    <Bubble
      text="oh hey how're you?"
      time="sometime"
      onClick={action("clicked")}
    />
  )
  .add("chat bubble long", () =>
    <div>
      <Bubble
        text="oh hey I'm doing great. Thanks a lot for asking!"
        time="June 9, 2017"
        messageType={2}
      />
      <Bubble
        text="oh hey how're you?"
        time="sometime"
        onClick={action("clicked")}
      />
    </div>
  );
