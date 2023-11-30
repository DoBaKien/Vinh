import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { SapXep, criteria } from "../../assets/action/Data";
function Find() {
  const { id } = useParams();

  const [dataPhone, setDataPhone] = useState([]);
  const style = [
    { top: "-6em" },
    {
      bottom: "270px",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get(
          "http://localhost:8521/api/v1/products/getAll"
        );
        let data = res && res.data ? res.data : [];

        setDataPhone(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  const Itemas = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    ":hover": {
      backgroundColor: "#aa91ff",
      fontWeight: "bold",
    },
  }));

  return (
    <section>
      <div className="container-xl py-2" style={{ width: "92%" }}>
        <div className="row">
          <Typography variant="h5">Chọn theo tiêu chí</Typography>
          <Grid container>
            {Array.from(criteria).map((item, index) => (
              <Grid
                item
                xs={2}
                sm={1}
                md={2}
                key={index}
                sx={{ margin: 1, cursor: "pointer" }}
              >
                <Itemas>{item.name}</Itemas>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="row">
          <Typography variant="h5">Sắp xếp theo</Typography>
          <Grid container>
            {Array.from(SapXep).map((item, index) => (
              <Grid
                item
                xs={2}
                sm={1}
                md={2}
                key={index}
                sx={{ margin: 1, cursor: "pointer" }}
              >
                <Itemas>{item.name}</Itemas>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          {dataPhone.map((item, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <Item children={item} style={style} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Find;
