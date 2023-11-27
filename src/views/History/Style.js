import { Box, Grid, Stack, styled } from "@mui/material";

export const CheckStatus = ({ value }) => {
  if (value === "1") {
    return <div>Đang xử lý</div>;
  } else if (value === "2") {
    return <div>Đang vận chuyển</div>;
  } else if (value === "3") {
    return <div>Hoàn thành</div>;
  } else {
    return <div>Đã hủy</div>;
  }
};
export const ValueDate = ({ value }) => {
  const dateObject = new Date(value);
  const day = dateObject.getDate(); // Lấy ngày
  const month = dateObject.getMonth() + 1; // Lấy tháng (lưu ý: tháng trong JavaScript bắt đầu từ 0 nên phải cộng thêm 1)
  const year = dateObject.getFullYear(); // Lấy năm
  const hours = dateObject.getHours(); // Lấy giờ
  const minutes = dateObject.getMinutes(); // Lấy phút
  const date = `${hours}:${minutes} - ${day}/${month}/${year}`;
  return <div>{date}</div>;
};
export const ValueDate2 = (value) => {
  const dateObject = new Date(value);
  const day = dateObject.getDate(); // Lấy ngày
  const month = dateObject.getMonth() + 1; // Lấy tháng (lưu ý: tháng trong JavaScript bắt đầu từ 0 nên phải cộng thêm 1)
  const year = dateObject.getFullYear(); // Lấy năm
  const hours = dateObject.getHours(); // Lấy giờ
  const minutes = dateObject.getMinutes(); // Lấy phút
  const date = `${hours}:${minutes} - ${day}/${month}/${year}`;
  return date;
};
export const StackNav = styled(Stack)({
  width: "80%",
  backgroundColor: "white",
  justifyContent: "space-between",
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 20,
  border: "1px solid black",
  marginTop: 10,
});
export const BoxBtn = styled(Box)({
  backgroundColor: "white",
  padding: 10,
  border: "1px solid black",
  borderRadius: 20,
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
});
export const GridBox = styled(Grid)({
  border: "1px solid black",
  borderRadius: 20,
  paddingTop: 2,
  paddingBottom: 10,
  backgroundColor: "white",
});
