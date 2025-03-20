import { Box, Flex, Text } from "@chakra-ui/react";

export const Ingredients = ({ recipe }) => {
  return (
    <Box>
      {recipe.ingredients.map((ingredient, index) => (
        <Flex key={index} direction="row" align="left" justify="left">
          <Text>{ingredient.text}</Text>
        </Flex>
      ))}
    </Box>
  );
};
