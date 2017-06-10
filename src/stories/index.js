/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./Button";
import { Bubble } from "./Bubble";

storiesOf("ChatView", module)
  .add("with text", () =>
    <Button primary onClick={action("clicked")}>Hello Button</Button>
  )
  .add("with some emoji", () =>
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  )
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
        text="oh hey how're you? I'm doing great, thanks a lot for asking!"
        time="sometime"
        sent={true}
      />
      <Bubble
        text="oh hey how're you?"
        time="sometime"
        onClick={action("clicked")}
      />
    </div>
  );
