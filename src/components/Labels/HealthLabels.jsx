import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const HealthLabels = ({ recipe }) => {
  // selecting all health labels
  const healthLabels = recipe.healthLabels;

  // return each label seperately
  return healthLabels.map((healthLabel) => {
    return (
      <Text
        key={uuid()}
        fontSize={{
          base: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
        }}
      >
        {healthLabel}
      </Text>
    );
  });
};
