import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import { Variable } from "astal";
import Workspaces from "./components/workspace";

const time = Variable("").poll(1000, "date");

export default function bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;
  return (
    <window
      className="bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={App}
    >
      <centerbox>
        <Workspaces />

        {/* <button onClicked="echo hello" halign={Gtk.Align.START}> */}
        {/*   Welcome to AGS! */}
        {/* </button> */}
        {/* <button onClicked={() => print("hello")} halign={Gtk.Align.START}> */}
        {/*   <label label={time()} /> */}
        {/* </button> */}
      </centerbox>
    </window>
  );
}
