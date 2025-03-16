import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const DietLabels = ({ recipe }) => {
  // selecting dietLabels
  const dietLabels = recipe.dietLabels;

  // return each label seperately
  return dietLabels.map((dietLabel) => {
    return (
      <Text
        color="green.600"
        fontWeight="semibold"
        key={uuid()}
        fontSize={{
          base: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
        }}
      >
        {dietLabel}
      </Text>
    );
  });
};
