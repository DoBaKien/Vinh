import { Box, Divider, Stack, Typography } from "@mui/material";
import Left from "../User/Left";
import { DividerBox, TypographyList } from "./Style";
import logo from "../../assets/images/logo.png";
function Account() {
  const dataUser = JSON.parse(localStorage.getItem("data"));
  console.log(dataUser);
  const checkSex = () => {
    if (dataUser.sex === 1) {
      return <TypographyList>Giới tính: Nam</TypographyList>;
    } else {
      return <TypographyList>Giới tính: Nữ</TypographyList>;
    }
  };
  return (
    <Box
      sx={{ flex: 1, display: "flex", justifyContent: "center", marginTop: 2 }}
    >
      <Stack direction={"row"} sx={{ width: "80vw" }} gap={5}>
        <Left />
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            // paddingLeft: 20,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="" width={80} />
          </Box>
          <TypographyList>
            Họ và tên: {dataUser.lastName + " " + dataUser.firstName}
          </TypographyList>
          <DividerBox />
          {checkSex()}
          <DividerBox />
          <TypographyList>Số điện thoại: {dataUser.phone}</TypographyList>
          <DividerBox />
          <TypographyList>Email: {dataUser.email}</TypographyList>
          <DividerBox />
          <TypographyList>
            Sinh nhật: {dataUser.dateOfBirth || "Không có"}
          </TypographyList>
          <DividerBox />
          <TypographyList>
            Địa chỉ: {dataUser.address || "Không có"}
          </TypographyList>
          <DividerBox />
        </Box>
      </Stack>
    </Box>
  );
}

export default Account;
