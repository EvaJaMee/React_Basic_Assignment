import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { SearchRecipe } from "../components/SearchRecipe";

export const RecipesPage = () => {
  const greeting = "Winc Recipe Checker";
  const [userRecipe, setUserRecipe] = useState("");

  return (
    <Center w="100%" h="100%" flexDir="column" bgColor="purple.100">
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading
            width="100%"
            h="100px"
            mb="10px"
            textAlign="center"
            color="black"
            fontSize={{ base: "1rem", sm: "2rem", md: "2rem", lg: "4rem" }}
          >
            {greeting}
          </Heading>

          <SearchRecipe onClick={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
