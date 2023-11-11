import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import ReportIcon from "@mui/icons-material/Report";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";

function Left() {
  return (
    <Box p={1} sx={{ width: 300, bgcolor: "white" }}>
      <Box>
        <List bgcolor="background.paper">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Trang chủ" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <Divider />
          <ListItem disablePadding sx={{ marginTop: 2, marginBottom: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Lịch sử mua hàng" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <Divider />
          <ListItem disablePadding sx={{ marginTop: 2, marginBottom: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Tài khoản của bạn" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <Divider />
          <ListItem disablePadding sx={{ marginTop: 2, marginBottom: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Hỗ trợ" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <Divider />
          <ListItem disablePadding sx={{ marginTop: 2, marginBottom: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Đăng xuất" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <Divider />
        </List>
      </Box>
    </Box>
  );
}

export default Left;
