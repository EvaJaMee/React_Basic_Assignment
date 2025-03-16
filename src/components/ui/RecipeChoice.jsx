import {
  Heading,
  Image,
  Box,
  Flex,
  IconButton,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { DietLabels } from "./Labels/DietLabels";
import { Cautions } from "./Labels/Cautions";
import { Ingredients } from "./Labels/Ingredients";
import { Nutrients } from "./Labels/Nutrients";
import { HealthLabels } from "./Labels/HealthLabels";
import { useEffect } from "react";

// Card item RecipeChoice
export const RecipeChoice = ({ recipe, onClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Card
      mt={{ base: "50px", lg: "300px", xl: "50px" }}
      direction="column"
      w={{ base: "90%", lg: "70%", xl: "70%" }}
      h="100%"
      p="10"
      borderRadius="25px"
      opacity="0.9"
      textAlign="center"
    >
      {/* Return Arrow to RecipesPage*/}
      <CardHeader>
        <Flex alignItems="center" justifyContent="center" gap={2}>
          <IconButton
            variant={"ghost"}
            textAlign="left"
            color="black"
            icon={<ArrowLeftIcon />}
            _hover={{ bg: "black", color: "white" }}
            _active={{ bg: "purple.100" }}
            onClick={() => onClick()}
          />
          <Heading size="lg">{recipe.label}!</Heading>
        </Flex>
        <Flex direction="column" alignItems="center" gap={5} mt="3rem">
          <Box h="250px" w="400px">
            <Image
              h="100%"
              w="100%"
              pb="10px"
              borderRadius="10px"
              src={recipe.image}
              alt="recipe"
            />
          </Box>
          <Flex direction="column" gap={3}>
            <Flex gap={5}>
              <Flex gap={2}>
                <Text as="b" fontSize="md">
                  Meal Type:
                </Text>
                <Text fontSize="md">{recipe.mealType}</Text>
              </Flex>
              <Flex gap={2}>
                <Text as="b" fontSize="md">
                  Dish Type:
                </Text>
                <Text fontSize="md">{recipe.dishType}</Text>
              </Flex>
            </Flex>
            <Flex gap={5}>
              <Flex gap={2}>
                <Text as="b" fontSize="md">
                  Total cooking time:
                </Text>
                <Text fontSize="md">{recipe.totalTime} minutes</Text>
              </Flex>
              <Flex gap={2}>
                <Text as="b" fontSize="md">
                  Servings:
                </Text>
                <Text fontSize="md">{recipe.yield} person</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody
        direction="column"
        flexWrap="wrap"
        gap={2}
        align="flexStart"
        ml="3rem"
      >
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align="flex-start"
          justify="flex-start"
          gap={5}
          m="10px auto"
        >
          {/* Show the appropiate label when applicable */}
          {recipe.dietLabels.length > 0 ? (
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              flexWrap="wrap"
              gap={2}
            >
              <Text as="b">Diet Labels:</Text>
              <Text>
                <DietLabels recipe={recipe} />
              </Text>
            </Flex>
          ) : null}

          {recipe.cautions.length > 0 ? (
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              flexWrap="wrap"
              gap={2}
            >
              <Text as="b">Cautions:</Text>
              <Text>
                <Cautions recipe={recipe} />
              </Text>
            </Flex>
          ) : null}
        </Flex>
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align="flex-start"
          justify="flex-start"
          textAlign="left"
          gap={5}
          m="10px auto"
        >
          <Box w={{ md: "50%", lg: "50%" }}>
            <Text as="b">Health Labels:</Text>

            <Flex
              direction="row"
              flexWrap="wrap"
              gap={{ base: "1", sm: "1", md: "2", lg: "3" }}
            >
              <HealthLabels recipe={recipe} />
            </Flex>
          </Box>

          <Box>
            <Text as="b">Ingredients:</Text>

            <Flex
              direction="column"
              flexWrap="wrap"
              gap={1}
              align="flex-start"
              justify="flex-start"
            >
              <Ingredients recipe={recipe} />
            </Flex>
          </Box>
        </Flex>
      </CardBody>
      <CardFooter>
        <Flex>
          <Nutrients recipe={recipe} />
        </Flex>
      </CardFooter>
    </Card>
  );
};
