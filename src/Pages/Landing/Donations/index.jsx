import { List, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import React from "react";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useMediaQuery } from "@mantine/hooks";

const Donations = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");
  const { translate } = useContext(UserContext);
  return (
    <SimpleGrid
      style={{ backgroundColor: "#f0f0f0", marginBlock: "50px" }}
      breakpoints={[
        { minWidth: "sm", cols: 1 },
        { minWidth: "md", cols: 2 },
      ]}
      p="xl"
      spacing={"100px"}
    >
      <form style={{ width: "90%", margin: "auto" }}>
        <Title align="center">Make A Donation</Title>
        <InputField placeholder={"Full Name"} />
        <InputField placeholder={"Email"} />
        <InputField placeholder={"Contact Number"} />
        <InputField placeholder={"Amount"} />
        <Button label={"Donate"} />
      </form>
      <Stack spacing={"20px"} w={"100%"}>
        <Title order={1} mt="0px">
          {translate(
            "Empower the Gypsy Community Donate and Make a Lasting Impact"
          )}
        </Title>
        <Text>
          {translate(
            "Ignite hope. Unleash compassion. Support the Gypsy community. Your donation breathes life into forgotten dreams, breaking chains of marginalization. Together, we create a symphony of transformation, painting a brighter future. Let love and understanding guide our path, rewriting their story with unwavering kindness. Make an indelible mark of empathy, for every heartfelt gift shapes their lives"
          )}
          .
        </Text>
        <List mt={"xl"}>
          <List.Item>
            {translate(
              "Your support celebrates the vibrant culture of the Gypsy people"
            )}
            .
          </List.Item>
          <List.Item>
            {translate(
              "By amplifying their voices, you nurture their dreams for a better future"
            )}
            .
          </List.Item>
          <List.Item>
            {translate(
              "Your generosity becomes a catalyst for positive change"
            )}
            .
          </List.Item>
          <List.Item>
            {translate(
              "Together, we can make a profound difference in their lives"
            )}
            .
          </List.Item>
        </List>
      </Stack>
    </SimpleGrid>
  );
};

export default Donations;
