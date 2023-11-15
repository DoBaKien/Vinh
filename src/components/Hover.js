import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextMenu } from "../assets/style/Style";
import {
  dataGaming,
  dataGaming2,
  dataLap,
  dataLap2,
  dataPK,
  dataPK2,
  dataStorage,
  dataStorage2,
  dataTn,
  dataTn2,
} from "../assets/action/Data";

const Hover = (props) => {
  const [dataasd, setData] = useState("");
  const [dataasd1, setData1] = useState("");
  useEffect(() => {
    if (props.data === "pk") {
      setData(dataPK);
      setData1(dataPK2);
    } else if (props.data === "laptop") {
      setData(dataLap);
      setData1(dataLap2);
    } else if (props.data === "game") {
      setData(dataGaming);
      setData1(dataGaming2);
    } else if (props.data === "loa") {
      setData(dataTn);
      setData1(dataTn2);
    } else if (props.data === "pc") {
      setData(dataGaming);
      setData1(dataGaming2);
    } else if (props.data === "lt") {
      setData(dataStorage);
      setData1(dataStorage2);
    }
  }, []);

  return (
    <Box
      sx={{
        width: 820,
        paddingBottom: 3,
      }}
    >
      <Box>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 2,
            height: "50%",
            marginTop: 1,
          }}
        >
          {dataasd ? (
            dataasd.map((item, index) => {
              return (
                <Box sx={{ flex: 1, height: "100%" }} key={index}>
                  <Typography variant="h6" color={"red"}>
                    {item.id}
                  </Typography>
                  {item.type.map((name, index) => {
                    return <TextMenu variant="body2">{name.name}</TextMenu>;
                  })}
                </Box>
              );
            })
          ) : (
            <></>
          )}
        </Box>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 2,
            height: "50%",
            marginTop: 3,
          }}
        >
          {dataasd1 ? (
            dataasd1.map((item, index) => {
              return (
                <Box sx={{ flex: 1, height: "100%" }} key={index}>
                  <Typography variant="h6" color={"red"}>
                    {item.id}
                  </Typography>
                  {item.type.map((name, index) => {
                    return <TextMenu variant="body2">{name.name}</TextMenu>;
                  })}
                </Box>
              );
            })
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Hover;
