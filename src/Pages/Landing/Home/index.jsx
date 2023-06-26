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

const Home = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 820px)");
  const isWeb = useMediaQuery("(min-width: 1200px)");
  return (
    <Grid className={classes.home} px={!isWeb ? "md" : "150px"} pb="50px" m="0px">
      <Grid.Col lg={8}>
        <Stack spacing={"50px"} style={{ marginTop: "auto" }}>
          <Text
            fz={isMobile ? "40px" : "60px"}
            fw={"bolder"}
            lh={isMobile ? "40px" : "60px"}
          >
            EMPOWERING LIVES, INSPIRING CHANGE
          </Text>
          <Text>
            Unlocking Potential, Transforming Lives: Our NGO is dedicated to
            empowering people and communities. Unlocking Potential, Transforming
            Lives: Our NGO is dedicated to empowering people and communities.
            Unlocking Potential, Transforming Lives: Our NGO is dedicated to
            empowering people and communities.
          </Text>
          <Group>
            <Button label={"Join Us"} />
            <Button label={"Sign In"} variant="outline" />
          </Group>
          <Flex justify={"space-around"} gap={"lg"}>
            <Card icon={"cat1"} label={"IOS"} value={"102k"} />
            <Card icon={"cat2"} label={"Download"} value={"102k"} />
            <Card icon={"cat3"} label={"Download"} value={"102k"} />
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
