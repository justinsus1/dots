import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import { Variable, bind } from "astal";
import Hyprland from "gi://AstalHyprland";

export default function Workspaces() {
  const hypr = Hyprland.get_default();

  return (
    <box className="Workspaces">
      {bind(hypr, "workspaces").as((ws) =>
        ws
          // .filter((ws) => !(ws.id >= -99 && ws.id <= -2)) // exclude special workspaces
          .sort((a, b) => a.id - b.id)
          .map((ws) => (
            <box>
              {bind(hypr, "activeWorkspace").as((aws) => {
                const isActive = aws?.id === ws.id;
                return (
                  <button
                    label={true ? "" : ""}
                    onClicked={() => ws.focus()}
                  >
                    {ws.id}
                  </button>
                );
              })}
            </box>
          )),
      )}
    </box>
  );
}
