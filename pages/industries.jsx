import { Box, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

function Industries() {
  return (
    <Fragment>
      <Head>
        <title>Interbond Industries</title>
        <meta
          name="description"
          content="Interbond Industries: Producers of all kinds of Electrical Fittings and Lights. CEO: Sonny Nlewedim."
        />
      </Head>

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
        <Box mb="2rem" textAlign="center">
          <Heading>Interbond Chanderliers</Heading>
          <Text mx="auto" w="80%">
            Vast varities of Chandeliers with very unique designs and
            detailings. High durability and top notch aesthetics
          </Text>
        </Box>

        <Grid
          gridGap="5px"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
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

      <Box bg="brand.900" color="white">
        <Box mb="2rem" textAlign="center">
          <Heading>Interbond Lamp Shades</Heading>
          <Text mx="auto" w="80%">
            Lamp shades varies from sizes to sizes, color, quality and even the
            ray of light emitted. Interbond Electricals provide lampshades for
            the right purpose.
          </Text>
        </Box>

        <Grid
          gridGap="5px"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          mx="auto"
          mb="4rem"
          w={{ base: "90%", md: "80%", lg: "70%" }}
        >
          <Img src="/assets/images/lamp1.jpg" alt="Interbond lamp shade" />
          <Img src="/assets/images/lamp2.jpg" alt="Interbond lamp shade" />
          <Img src="/assets/images/lamp3.jpg" alt="Interbond lamp shade" />
        </Grid>
      </Box>

      <Box>
        <Box mb="2rem" textAlign="center">
          <Heading>Other Electrical Fittings</Heading>
          <Text mx="auto" w="80%">
            Interbond industries produce other different kind of electrical
            fittings, both for exterior and interior purpose. Iterbond produces
            ranging from small to medium to large elctrical fittings for
            aesthetics and customer satisfaction.
          </Text>
        </Box>

        <Grid
          gridGap="5px"
          gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
          mx="auto"
          mb="4rem"
          w={{ base: "90%", md: "80%", lg: "70%" }}
        >
          <Img
            src="/assets/images/fittings-1.jpg"
            alt="Interbond electrical fitting"
          />
          <Img
            src="/assets/images/fittings-2.jpg"
            alt="Interbond electrical fitting"
            gridRow="span 2"
          />
          <Img
            src="/assets/images/fittings-3.jpg"
            alt="Interbond electrical fitting"
          />
          <Img
            src="/assets/images/fittings-4.jpg"
            alt="Interbond electrical fitting"
          />
          <Img
            src="/assets/images/fittings-5.jpg"
            alt="Interbond electrical fitting"
          />
          <Img
            src="/assets/images/fittings-6.jpg"
            alt="Interbond electrical fitting"
          />
        </Grid>
      </Box>

      <Footer />
    </Fragment>
  );
}

export default Industries;
