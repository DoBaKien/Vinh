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
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 9; // Number of items to display per page
  const style = [
    { top: "-6em" },
    {
      bottom: "270px",
    },
  ];
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleNext = () => {
    if (currentIndex < dataPhone.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get(
          "http://localhost:8521/api/v1/products/getAll"
        );
        let data = res && res.data ? res.data : [];

        const result = data.filter((item) => item.category.categoryName === id);
        setDataPhone(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  const displayedItems = dataPhone.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

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
          {displayedItems.map((item, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <Item children={item} style={style} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-6 text-end">
            <button
              className="btn btn-primary"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={currentIndex >= dataPhone.length - itemsPerPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Find;
