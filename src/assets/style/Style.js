import { ListItemButton, Typography, styled } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const ListButton = styled(ListItemButton)(() => ({
  marginBottom: 5,
  borderRadius: 20,
  "&:hover": {
    backgroundColor: "#146C94",
    color: "white",
  },
}));

export const TextMenu = styled(Typography)(() => ({
  marginBottom: 5,
}));

export const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "100%",

    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
