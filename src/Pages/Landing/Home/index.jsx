import {
  Box,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import Button from "../../../components/Button";
import { useStyles } from "../styles";
import { Card } from "./Card";
import img1 from "../../../assets/home.png";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 820px)");
  const isWeb = useMediaQuery("(min-width: 1200px)");
  return (
    <Grid
      className={classes.home}
      px={!isWeb ? "md" : "150px"}
      pb="50px"
      m="0px"
    >
      <Grid.Col lg={8}>
        <Stack spacing={"50px"} style={{ marginTop: "auto" }}>
          <Text
            fz={isMobile ? "40px" : "60px"}
            fw={"bolder"}
            lh={isMobile ? "40px" : "60px"}
          >
            EMPOWERING LIVES, INSPIRING CHANGE
          </Text>
          <Text align="justify">
            Our mission at GAU is to create lasting, positive change in the
            world. We are dedicated to empowering individuals and communities by
            providing support and fostering hope. Through our collaborative
            efforts, we strive to address pressing social, environmental, and
            economic challenges.
          </Text>
          <Group>
            <Button
              label={"Join Us"}
              onClick={() =>
                (window.location.href = "https://gauapp.es/auth/signup")
              }
            />
            <Button
              label={"Sign In"}
              variant="outline"
              onClick={() =>
                (window.location.href = "https://gauapp.es/auth/signin")
              }
            />
          </Group>
          <Flex justify={"space-around"} gap={"lg"}>
            <Card icon={"people"} label={"Users"} value={"1000"} />
            <Card icon={"cat1"} label={"Cases"} value={"5000"} />
            <Card icon={"branch"} label={"Branches"} value={"99"} />
          </Flex>
        </Stack>
      </Grid.Col>
      {isWeb && (
        <Grid.Col lg={4}>
          <img src={img1} width={"100%"} />
        </Grid.Col>
      )}
    </Grid>
  );
};
export default Home;
