import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Autocomplete } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CellTowerIcon from "@mui/icons-material/CellTower";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex gap-5">
          <img src="/images/logo.svg" alt="" />
          <MenuIcon color="primary" className="" />
          <input type="text" className="bg-[#f1e7e7]" />
        </div>
        <div className="flex gap-8">
          <div className="bg-[#d8d8f4] p-2">
            <TranslateIcon color="action" />
          </div>
          <div className="p-2 bg-[#eaeaed] rounded">
            <CircleNotificationsIcon color="primary" />
          </div>
          <div className="bg-[#f2e2f2] p-2 rounded">
            <CellTowerIcon color="secondary" />
          </div>
          <div className="flex p-5 ">
            <img src="/images/profile.svg" alt="" />
            <div className="p-2 rounded">
              <SettingsIcon className="bg-[#f2e0e3] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
