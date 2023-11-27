import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import {
  dataGaming,
  dataGaming2,
  dataLK,
  dataLK2,
  dataLap,
  dataLap2,
  dataPK,
  dataPK2,
  dataStorage,
  dataStorage2,
  dataTn,
  dataTn2,
} from "../assets/action/Data";
import { useEffect, useState } from "react";
import { BoxMenu, TextMenu } from "../assets/style/Style";

function HoverMenu({ hovered, setHovered, data }) {
  const handleHover = () => {
    setHovered(!hovered);
  };
  const [daa, setDaa] = useState("");
  const [daas, setDaas] = useState("");
  useEffect(() => {
    switch (data) {
      case "main":
        setDaa(dataPK);
        setDaas(dataPK2);
        break;
      case "laptop":
        setDaa(dataLap);
        setDaas(dataLap2);
        break;
      case "case":
        setDaa(dataGaming);
        setDaas(dataGaming2);
        break;
      case "SSD":
        setDaa(dataStorage);
        setDaas(dataStorage2);
        break;
      case "loa":
        setDaa(dataTn);
        setDaas(dataTn2);
        break;
      case "Key":
        setDaa(dataLK);
        setDaas(dataLK2);
        break;
      default:
        break;
    }
  }, [data]);

  return (
    <>
      {hovered ? (
        <Paper
          sx={{
            position: "absolute",
            width: 820,
            display: "flex",
            borderRadius: "10px",
            backgroundColor: "white",
            zIndex: 3,
            marginLeft: 30,
            height: 350,
            marginTop: 1,
          }}
          onMouseLeave={handleHover}
          onMouseEnter={() => setHovered(true)}
        >
          <Stack sx={{ flex: 1 }}>
            <BoxMenu>
              {daa ? (
                daa.map((item, index) => {
                  return (
                    <Box sx={{ flex: 1, height: "100%" }} key={index}>
                      <Typography variant="h6" color={"red"}>
                        {item.id}
                      </Typography>
                      {item.type.map((name, index) => {
                        return (
                          <TextMenu variant="body2" key={index}>
                            {name.name}
                          </TextMenu>
                        );
                      })}
                    </Box>
                  );
                })
              ) : (
                <></>
              )}
            </BoxMenu>
            <BoxMenu>
              {daas ? (
                daas.map((item, index) => {
                  return (
                    <Box sx={{ flex: 1, height: "100%" }} key={index}>
                      <Typography variant="h6" color={"red"}>
                        {item.id}
                      </Typography>
                      {item.type.map((name, index) => {
                        return (
                          <TextMenu variant="body2" key={index}>
                            {name.name}
                          </TextMenu>
                        );
                      })}
                    </Box>
                  );
                })
              ) : (
                <></>
              )}
            </BoxMenu>
          </Stack>
        </Paper>
      ) : null}
    </>
  );
}

export default HoverMenu;
