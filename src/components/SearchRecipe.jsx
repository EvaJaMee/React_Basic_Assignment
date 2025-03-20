import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { SearchInput } from "./ui/SearchInput";
import { RecipeItems } from "./RecipeItems";
import { RadioButton } from "./ui/RadioButton";
import { data } from "../utils/data";

const recipes = data.hits;

export const SearchRecipe = ({ onClick }) => {
  // search recipes
  const [searchField, setSearchField] = useState("");
  // filter recipes
  const [filterRecipes, setFilterRecipes] = useState("all");

  // function to filter recipes
  const handleFilter = (e) => {
    setFilterRecipes(e.target.value);
  };

  const recipesFilter = recipes.filter((recipe) => {
    // all recipes
    if (filterRecipes === "all") return recipe;
    // pescatarian recipes
    if (filterRecipes === "pescatarian") {
      return recipe.recipe.healthLabels.includes("Pescatarian");
    }
    // vegetarian recipes
    if (filterRecipes === "vegetarian") {
      return recipe.recipe.healthLabels.includes("Vegetarian");
    }
    // vegan recipes
    if (filterRecipes === "vegan") {
      return recipe.recipe.healthLabels.includes("Vegan");
    }
  });

  // filter recipes from search input
  const matchRecipes = recipesFilter.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <Flex direction="column" alignItems="center" justify="center" w="100%">
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        gap={3}
        w="85%"
        mt="2rem"
        boxSizing="borderbox"
      >
        {/*radio buttons*/}
        <RadioButton value={filterRecipes} onChange={handleFilter} />
        <SearchInput onChange={(e) => setSearchField(e.target.value)} />
      </Flex>
      <RecipeItems onClick={onClick} recipes={matchRecipes} />
    </Flex>
  );
};
