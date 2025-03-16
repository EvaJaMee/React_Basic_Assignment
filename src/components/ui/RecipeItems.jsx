import { Flex } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";
import uuid from "react-uuid";

// collect all recipe items to map them for search recipe
export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <Flex
      p="20"
      w="98%"
      direction="row"
      wrap="wrap"
      gap="20px"
      alignItems="center"
      justifyContent="center"
    >
      {recipes.map((recipe) => (
        <RecipeItem onClick={onClick} key={uuid()} recipe={recipe.recipe} />
      ))}
    </Flex>
  );
};
