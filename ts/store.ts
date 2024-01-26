import { logout, restart, shutdown } from "$state/Desktop/ts/power";
import { ConnectIcon } from "$ts/images/general";
import { LogoutIcon, RestartIcon, ShutdownIcon } from "$ts/images/power";

export let ExitActions = {
  restart: {
    action: restart,
    caption: "Restart",
    icon: RestartIcon,
  },
  poweroff: {
    action: shutdown,
    caption: "Power Off",
    icon: ShutdownIcon,
  },
  logoff: {
    action: logout,
    caption: "Logout",
    icon: LogoutIcon,
  },
  $changeHost: {
    action: null,
    caption: "Pick Host",
    icon: ConnectIcon,
  },
};
