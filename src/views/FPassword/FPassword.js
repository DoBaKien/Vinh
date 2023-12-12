import { Box, Stack, Typography } from "@mui/material";
import Left from "../User/Left";
import { TextInput } from "../Account/Style";
import { useState } from "react";

function FPassword() {
  const [pass, setPass] = useState("");
  const [newP, setNewP] = useState("");

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        paddingBottom: 2,
      }}
    >
      <Stack direction={"row"} sx={{ width: "80vw" }} gap={5}>
        <Left />
        <Stack
          sx={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            borderRadius: 5,
            paddingTop: 3,
          }}
        >
          <Typography variant="h4">Đổi mật khẩu</Typography>
          <Box>
            <TextInput
              id="standard-basic"
              label="Mật khẩu cũ"
              variant="standard"
              value={pass || "Không có"}
              fullWidth
            />
            <TextInput
              id="standard-basic"
              label="Mật khẩu mới"
              variant="standard"
              value={newP || "Không có"}
              fullWidth
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default FPassword;
