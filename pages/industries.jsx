import { Box, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import Header from "../components/Header";

function Industries() {
  return (
    <Fragment>
      <Box
        height="100vh"
        backgroundImage="
        linear-gradient(
          to bottom,
          rgba(6, 7, 7, 0.52),
          rgba(22, 20, 22, 0.73)
        ),
        url(/assets/images/carousel1.jpg)"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        p={{ base: "1rem", lg: "3rem 5rem" }}
        color="white"
        mb="4rem"
      >
        <Header />

        <Flex height="100%" align="center" justify="center">
          <Heading textTransform="uppercase">
            Interbond Electricals and Decorative Lighting
          </Heading>
        </Flex>
      </Box>
      <Box>
        <Box textAlign="center">
          <Heading>Interbond Chanderliers</Heading>
          <Text>
            Vast varities of Chandeliers with very unique designs and
            detailings. High durability and top notch aesthetics
          </Text>
        </Box>

        <Grid
          gridGap="5px"
          gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gridAutoRows="75px"
          gridAutoFlow="dense"
          mx="auto"
          mb="4rem"
          w={{ base: "90%", md: "80%", lg: "70%" }}
        >
          <Img
            w="100%"
            h="100%"
            objectFit="cover"
            gridRow="span 6"
            src="/assets/images/chandelier-lng.jpg"
            alt="chandlier"
          />
          <Img
            w="100%"
            h="100%"
            objectFit="cover"
            gridRow="span 3"
            src="/assets/images/chandelier1.jpg"
            alt="chandlier"
          />
          <Img
            w="100%"
            h="100%"
            objectFit="cover"
            gridRow="span 3"
            gridRow="span 3"
            src="/assets/images/chandelier2.jpg"
            alt="chandlier"
          />
        </Grid>
      </Box>
    </Fragment>
  );
}

export default Industries;
