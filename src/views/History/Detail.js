import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Left from "../User/Left";
import { useEffect, useState } from "react";
import axios from "axios";
import { BoxBtn, GridBox, StackNav, ValueDate2 } from "./Style";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";

function Detail() {
  const [data, setData] = useState("");
  const [sum, setSum] = useState("");
  const idO = useParams();

  useEffect(() => {
    axios
      .get(`/api/v1/orders/getOrderById/${idO.id}`)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        setSum(
          response.data.orderDetails.reduce(
            (acc, item) => acc + item.product.price * item.quantity,
            0
          )
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [idO.id]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },

    {
      field: "name",
      headerName: "Tên sản phẩm",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Số lượng",
      flex: 0.5,
    },
    {
      field: "price",
      headerName: "Giá",
      flex: 0.5,
    },
  ];
  const checkS = (value) => {
    if (value === "1") {
      return "Đang xử lý ";
    } else if (value === "2") {
      return "Đang vận chuyển";
    } else if (value === "3") {
      return "Hoàn thành";
    } else {
      return "Đã hủy";
    }
  };

  const BoxNav = () => {
    if (data.statusOrder.charAt(0) === "0") {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BoxBtn sx={{ display: "block", paddingLeft: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              Lý do
            </Typography>
            <Typography>{data.statusOrder.substring(1)}</Typography>
          </BoxBtn>
        </Box>
      );
    } else if (data.statusOrder !== "3") {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BoxBtn gap={10} sx={{ width: 200 }}>
            <Button variant="contained" color="error">
              Hủy đơn
            </Button>
          </BoxBtn>
        </Box>
      );
    }
  };

  const checkData = () => {
    if (data !== "") {
      return (
        <Paper
          sx={{
            flex: 1,
            mx: "auto",
            width: "97%",
            p: 1,
            backgroundColor: "#E3EFFD",
          }}
        >
          <Stack direction="column" spacing={1} sx={{ height: 1 }}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center" }}
            >{`Hóa đơn ${idO.id}`}</Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StackNav direction={"row"}>
                <Typography variant="subtitle1">
                  Trạng thái: {checkS(data.statusOrder)}
                </Typography>
                <Typography variant="subtitle1">
                  Tổng hóa đơn:{" "}
                  {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </Typography>
                <Typography variant="subtitle1">
                  Ngày lập: {ValueDate2(data.date)}
                </Typography>
              </StackNav>
            </Box>
            <BoxNav />
            <Grid
              container
              sx={{ justifyContent: "space-between", padding: 3 }}
            >
              <GridBox
                item
                md={4}
                sx={{
                  paddingLeft: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Thông tin khách hàng
                </Typography>
                <Typography variant="body1">
                  {data.customer.lastName + " " + data.customer.firstName}
                </Typography>
                <Typography variant="body1">{data.customer.email}</Typography>
                <Typography variant="body1">{data.customer.phone}</Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    Ghi chú
                  </Typography>
                  <Typography>{data.note || "không có"}</Typography>
                </Box>
              </GridBox>

              {data.employee !== null ? (
                <GridBox item md={3} sx={{ paddingRight: 2 }}>
                  <Typography
                    variant="h6"
                    align="right"
                    sx={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    Nhân viên
                  </Typography>
                  <Typography variant="body1" align="right">
                    {data.employee.id || "Id"}
                  </Typography>
                  <Typography variant="body1" align="right">
                    {data.employee !== ""
                      ? data.employee.lastName + " " + data.employee.firstName
                      : "Tên"}
                  </Typography>
                  <Typography align="right" variant="body1">
                    {data.employee !== "" ? data.employee.email : "Email"}
                  </Typography>
                </GridBox>
              ) : null}
            </Grid>
            {data !== "" ? (
              <DataGrid
                localeText={{
                  toolbarColumns: "Cột",
                  toolbarDensity: "Khoảng cách",
                  toolbarFilters: "Lọc",
                  toolbarExport: "Xuất ",
                }}
                rows={data.orderDetails.map((item) => ({
                  id: item.id,
                  name: item.product.productName,
                  price: item.product.price,
                  quantity: item.quantity,
                }))}
                columns={columns}
                sx={{ flex: 1, backgroundColor: "white" }}
                hideFooter
              />
            ) : (
              <></>
            )}
          </Stack>
        </Paper>
      );
    } else {
      return (
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
  };
  return (
    <Box
      sx={{ flex: 1, display: "flex", justifyContent: "center", marginTop: 2 }}
    >
      <Stack direction={"row"} sx={{ width: "80vw" }} gap={5}>
        <Left />
        <Box sx={{ width: "100%" }}>{checkData()}</Box>
      </Stack>
    </Box>
  );
}

export default Detail;
