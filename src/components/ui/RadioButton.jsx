import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

// radio buttons to select the vegan, vegetarian and pescatarian recipes
export const RadioButton = ({ value, onChange }) => {
  return (
    <RadioGroup
      align="center"
      justify="center"
      value={value}
      m="0 auto"
      w={{ base: "90%", sm: "70%", md: "70%", lg: "50%" }}
    >
      <Stack
        p={{ base: "3px", md: "10px", lg: "20px" }}
        direction="row"
        h={{ base: "20px", md: "35px", lg: "40px" }}
        align="center"
        justify="center"
        bgColor="white"
        borderRadius="10px"
        gap={3}
      >
        <Radio
          value="all"
          onChange={onChange}
          spacing={1}
          size={{ base: "xs", md: "sm", lg: "sm" }}
        >
          <Text
            border="none"
            outline="none"
            fontSize={{ base: "0.5rem", md: "0.8rem", lg: "1.2rem" }}
            color="black"
          >
            All
          </Text>
        </Radio>
        <Radio
          value="pescatarian"
          onChange={onChange}
          spacing={1}
          size={{ base: "xs", md: "sm", lg: "sm" }}
        >
          <Text
            border="none"
            outline="none"
            fontSize={{ base: "0.5rem", md: "0.8rem", lg: "1.2rem" }}
            color="black"
          >
            Pescatarian
          </Text>
        </Radio>
        <Radio
          value="vegetarian"
          onChange={onChange}
          spacing={1}
          size={{ base: "xs", md: "sm", lg: "sm" }}
        >
          <Text
            border="none"
            outline="none"
            fontSize={{ base: "0.5rem", md: "0.8rem", lg: "1.2rem" }}
            color="black"
          >
            Vegetarian
          </Text>
        </Radio>
        <Radio
          value="vegan"
          onChange={onChange}
          spacing={1}
          size={{ base: "xs", md: "sm", lg: "sm" }}
        >
          <Text
            border="none"
            outline="none"
            fontSize={{ base: "0.5rem", md: "0.8rem", lg: "1.2rem" }}
            color="black"
          >
            Vegan
          </Text>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
