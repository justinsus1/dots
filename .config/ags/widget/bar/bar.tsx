import { App } from "astal/gtk3";
import { Variable, GLib, bind } from "astal";
import { Astal, Gtk, Gdk } from "astal/gtk3";
import Workspaces from "./components/workspace";
import Focused from "./components/focused";

const time = Variable("").poll(1000, 'date "+%H:%M"');

export default function bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;
  return (
    <window
      className="bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP}
      application={App}
    >
      <centerbox>
        <box
          className="cent-box"
          // halign={Gtk.Align.START}
        >
          {/* i didn't know how to create a spacer so i just used a label, this is sad */}

          <label label="                                                                      " />

          <label label="       " />

          <box className="work">
            <Workspaces />
          </box>

          {/* <box/> */}

          <label label="                                                                      " />

          <box>
            <label label={time()} />
          </box>

          <label label="  " />
        </box>
      </centerbox>
    </window>
  );
}
