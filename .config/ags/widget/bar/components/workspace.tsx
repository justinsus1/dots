import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import { Variable, bind } from "astal";
import Hyprland from "gi://AstalHyprland";

export default function Workspaces() {
  const hypr = Hyprland.get_default();

  return (
    <box className="Workspaces">
      {bind(hypr, "workspaces").as((ws) =>
        ws
          .sort((a, b) => a.id - b.id)
          .map((ws) => (
            <box>
              {bind(hypr, "focused_workspace").as((aws) => {
                const isActive = aws.id === ws.id;
                return (
                  <button
                    label={isActive ? "●" : "○"}
                    onClicked={() => ws.focus()}
                  >
                    {/* {ws.id} */}
                  </button>
                );
              })}
            </box>
          )),
      )}
    </box>
  );
}
