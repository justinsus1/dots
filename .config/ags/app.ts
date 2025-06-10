import { App } from "astal/gtk3";
import style from "./scss/style.scss";
import bar from "./widget/bar/bar";

App.start({
  css: style,
  main() {
    App.get_monitors().map(bar);
  },
});
