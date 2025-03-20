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
          <Box
            h={{ base: "200px", md: "250px" }}
            w={{ base: "90%", md: "400px" }}
          >
            <Image
              h="100%"
              w="100%"
              pb="10px"
              borderRadius="10px"
              src={recipe.image}
              alt="recipe"
              objectFit="cover"
            />
          </Box>
          <Flex
            direction="row"
            gap={5}
            mt="1rem"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Flex gap={1}>
              <Text as="b" fontSize="sm">
                Meal Type:
              </Text>
              <Text fontSize="sm">{recipe.mealType}</Text>
            </Flex>
            <Flex gap={1}>
              <Text as="b" fontSize="sm">
                Dish Type:
              </Text>
              <Text fontSize="sm">{recipe.dishType}</Text>
            </Flex>
            <Flex gap={1}>
              <Text as="b" fontSize="sm">
                Total cooking time:
              </Text>
              <Text fontSize="sm">{recipe.totalTime} minutes</Text>
            </Flex>
            <Flex gap={1}>
              <Text as="b" fontSize="sm">
                Portions:
              </Text>
              <Text fontSize="sm">{recipe.yield} person</Text>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody
        direction="column"
        flexWrap="wrap"
        gap={2}
        align="center"
        justify="center"
        textAlign="left"
      >
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align="left"
          justify="left"
          gap={5}
          m="10px auto"
        >
          {/* filter the recipes to show the label only when applicable */}
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
              align="left"
              justify="left"
            >
              <Text as="b">Diet Labels:</Text>
              <Box>
                <DietLabels recipe={recipe} />
              </Box>
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
              align="left"
              justify="left"
            >
              <Text as="b">Cautions:</Text>
              <Box>
                <Cautions recipe={recipe} />
              </Box>
            </Flex>
          ) : null}
        </Flex>
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align="center"
          justify="center"
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
              align="left"
              justify="left"
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
              align="left"
              justify="left"
            >
              <Ingredients recipe={recipe} />
            </Flex>
          </Box>
        </Flex>
      </CardBody>
      <CardFooter>
        <Flex align="center" justify="center">
          <Nutrients recipe={recipe} />
        </Flex>
      </CardFooter>
    </Card>
  );
};
