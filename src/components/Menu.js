import { List, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

import LaptopIcon from "@mui/icons-material/Laptop";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import SettingsInputHdmiIcon from "@mui/icons-material/SettingsInputHdmi";
import SpeakerGroupIcon from "@mui/icons-material/SpeakerGroup";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { HtmlTooltip, ListButton } from "../assets/style/Style";
import Hover from "./Hover";

const Menu = () => {
  return (
    <div style={{ width: "30%", height: "100%" }}>
      <List
        sx={{
          width: "100%",
          bgcolor: "white",
          borderRadius: 5,
          marginTop: 1,
          zIndex: 2,
        }}
        component="nav"
      >
        <HtmlTooltip
          placement="right-start"
          title={
            <React.Fragment>
              <Hover data="laptop" />
            </React.Fragment>
          }
        >
          <ListButton>
            <ListItemIcon>
              <LaptopChromebookIcon />
            </ListItemIcon>
            <ListItemText primary="Laptop" />
          </ListButton>
        </HtmlTooltip>
        <HtmlTooltip
          placement="right-start"
          title={
            <React.Fragment>
              <Hover data="pc" />
            </React.Fragment>
          }
        >
          <ListButton>
            <ListItemIcon>
              <LaptopIcon />
            </ListItemIcon>
            <ListItemText primary="Máy tính để bàn" />
          </ListButton>
        </HtmlTooltip>
        <HtmlTooltip
          placement="right-start"
          title={
            <React.Fragment>
              <Hover data="pk" />
            </React.Fragment>
          }
        >
          <ListButton>
            <ListItemIcon>
              <SettingsInputHdmiIcon />
            </ListItemIcon>
            <ListItemText primary="Phụ kiện công nghệ" />
          </ListButton>
        </HtmlTooltip>
        <HtmlTooltip
          placement="right-start"
          title={
            <React.Fragment>
              <Hover data="loa" />
            </React.Fragment>
          }
        >
          <ListButton>
            <ListItemIcon>
              <SpeakerGroupIcon />
            </ListItemIcon>
            <ListItemText primary="Tai nghe và loa" />
          </ListButton>
        </HtmlTooltip>
        <HtmlTooltip
          placement="right-start"
          title={
            <React.Fragment>
              <Hover data="lt" />
            </React.Fragment>
          }
        >
          <ListButton>
            <ListItemIcon>
              <SdStorageIcon />
            </ListItemIcon>
            <ListItemText primary="Thiết bị lưu trữ" />
          </ListButton>
        </HtmlTooltip>
        <HtmlTooltip
          placement="right-start"
          title={
            <React.Fragment>
              <Hover data="game" />
            </React.Fragment>
          }
        >
          <ListButton sx={{ marginBottom: 0 }}>
            <ListItemIcon>
              <SportsEsportsIcon />
            </ListItemIcon>
            <ListItemText primary="Gaming" />
          </ListButton>
        </HtmlTooltip>
      </List>
    </div>
  );
};
export default Menu;
