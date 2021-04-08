import { Fragment } from "react";
import { getAllPosts } from "../lib/api";
import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Img,
  Container,
  Text,
  Button,
  Grid,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

export default function Home({ allPosts }) {
  return (
    <Fragment>
      <Head>
        <title>Sonny Nlewedim</title>
        <meta
          name="description"
          content="Chief Sonny Nlewedim Detailed Portfolio. It shows his progression as a political thought leader and industrialist."
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
        url(/assets/images/mainbg.jpg)"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        p={{ base: "1rem", lg: "3rem 5rem" }}
        color="white"
        mb="4rem"
        zIndex="10"
      >
        <Header />

        <Flex height="100%" align="center">
          <Box>
            <Heading mb="2rem" as="h1">
              CHIEF SONNY NLEWEDIM
            </Heading>
            <Heading color="brand.600" as="h3" size="lg">
              INTERBOND FINANCE
            </Heading>
            <Heading color="brand.600" as="h3" size="lg">
              INTERBOND INDUSTRIES
            </Heading>
          </Box>
        </Flex>
      </Box>

      <Container maxW={{ base: "container.2xl", lg: "container.lg" }}>
        <Flex flexWrap="wrap" mb="4rem" justify="space-around">
          <Box width="300px" mb="2rem">
            <Img src="/assets/images/client.jpg" alt="Sonny Nlewedim" />
          </Box>
          <Flex
            mb="2rem"
            width={{ base: "100%", lg: "60%" }}
            flexDirection="column"
          >
            <Heading className="shadow-header" as="h4" size="md">
              CHIEF SONNY NLEWEDIM
            </Heading>
            <Text>
              He is the Chief Executive Officer of Interbond Nigeria Ltd, like
              the king, who William Shakespeare in his book: “King Richard 11,”
              said all the waters in the rude rough seas could not wash off the
              anointing balm on his head. The foremost industrialist,
              entrepreneur and politician, like a colossus, bestrode Nigeria’s
              manufacturing and financial sector in the 90’s. Since then, he has
              remained one of the few leading lights in a nation that is still
              groping in the dark for competent leadership. He and a few others
              championed the manufacturing of electrical appliances and
              accessories in the Nigeria in the early 90s. Interbond, which had
              its factory located on No. 4 Nwoha Street, Osisioma, Aba, Abia
              State, was famous for manufacturing of sophisticated chandeliers
              that rivaled similar products from Europe, America as well as
              Asia.
            </Text>
            <br />
            <Heading className="shadow-header" as="h4" size="md">
              REPUTATIONS
            </Heading>
            <Text>
              The astute businessman is also noted for his several interventions
              to successive administrations on how to grow the Nigerian economy.
              These interventions are mostly on correcting defective policies
              hindering the realization of the country’s industrialization
              dream. He has persistently maintained that a situation of poor
              infrastructure base, capital flight and an exchange rate that
              skews against the Naira will continue to discourage investments in
              the manufacturing sector.
            </Text>
          </Flex>
        </Flex>
      </Container>

      <Box
        py="2rem"
        boxShadow="0px -10px 16px rgb(211, 211, 212)"
        bg="#F8F8FF"
        mb="4rem"
      >
        <Container maxW="container.lg">
          <Box mb="2rem">
            <Heading className="shadow-header" as="h3" size="lg">
              POSITION AND ACCOMPLISHMENTS
            </Heading>

            <Text>
              {" "}
              His position is that the government and managers of the economy
              must combine both local and international perspectives that will
              inject a new dynamism to help revive the nation’s economy. Chief
              Nlewedim’s experience is not limited to the business world. He has
              also had stint in the public service. He was appointed as Chairman
              of Imo State Environmental Protection Agency during the botched
              Third Republic by then Governor Evan Enwerem. As head of the
              agency, Nlewedim worked directly under the then deputy governor of
              the state, Dr. Douglas Acholonu. Ahead of the country’s return to
              civil rule in 1999, Nlewedim aspired to govern Abia State but
              later dropped his ambition following interventions by some notable
              Nigerians.
            </Text>
            <br />
            <Text>
              Born in Umuawa Alaocha, Ohuhu, Umuahia in Abia State,
              Nigeria,Chief Nlebedim attended Comprehensive Secondary School
              Ogbor Hill, Aba. He later proceeded to Lagos State University,
              where he obtained a Diploma in Law. He began his career at GBO
              Olivanti (a subsidiary of UAC Nigeria) as a Supervisor. He later
              moved to RT Briscoe Motors as the Marketing Manager. He later
              disengaged from the services of the company set up his own
              business.In 1992, he was honoured with the Corporate Press
              Services Men of Achievement Award.
            </Text>
          </Box>
          <Box mb="2rem">
            <Heading className="shadow-header" as="h3" size="lg">
              AWARDS AND HONORS
            </Heading>

            <Text>
              1994 ROLE MODEL ENTERPRENEURIAL AWARD BY ENTERPREPREURSHIP
              DEVELOPMENT CENTER
            </Text>
            <Text>
              NATIONAL ASSOCIATION OF ABIA STATE STUDENTS UNION, 1996 GRAND
              PATRON
            </Text>
            <Text>MEMBER OF LAGOS CHAMBER OF COMMERCE</Text>
            <Text>MEMBER OF NIGERIA SOUTH AFRICA CHAMBER OF COMMERCE</Text>
            <Text>
              UMUAHIA CHAMBER OF COMMERCE MERIT AWARD IMO STATE CHAPTER
            </Text>
            <Text>
              NATIONAL ASSOCIATION OF WOMEN JOURNALISTS CERTIFICATE OF HONOR
            </Text>
          </Box>
        </Container>
      </Box>

      <Box
        px="2rem"
        bg="#000000"
        color="white"
        textAlign="center"
        py="10rem"
        mb="4rem"
      >
        <Box mb="2rem">
          <Heading size="lg" color="#8a2a21">
            INTERBOND INDUSTRIES
          </Heading>
          <Heading color="#8a2a21" size="sm">
            We provide the best lightning and lightning facilities for customer
            satisfaction
          </Heading>
        </Box>

        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gridGap="2rem"
          mb="2rem"
          justifyContent="center"
        >
          <Box>
            <Heading color="#8a2a21" as="h4" size="sm">
              Establishment
            </Heading>
            <Text fontWeight="bold" lineHeight="1.2rem" color="#c0827c">
              Interbond Electrical has been established for over 10 years as one
              of the leading ,anufacturers and suppliers of luminiars ranging
              from spot lights, wall and porch lanterns to very big chandelier.
            </Text>
          </Box>
          <Box>
            <Heading color="#8a2a21" as="h4" size="sm">
              {" "}
              Fittings Varieties
            </Heading>
            <Text fontWeight="bold" lineHeight="1.2rem" color="#c0827c">
              our extensive range of light fittings are manufactured in both
              Nigeria and overseas by renownedcraftmen talented in the intricate
              science of decorative lighting
            </Text>
          </Box>
          <Box>
            <Heading color="#8a2a21" as="h4" size="sm">
              Customer Service
            </Heading>
            <Text fontWeight="bold" lineHeight="1.2rem" color="#c0827c">
              customers are invited to visit our showrooms where they can
              receive advise demonstration by our team of highly trained
              lighting experts
            </Text>
          </Box>
        </Grid>

        <Link href="/industries">
          <Button bg="white" lineHeight="1" color="#8a2a21">
            EXPLORE PRODUCTS
          </Button>
        </Link>
      </Box>

      <Container mb="8rem" maxW="container.xl">
        <Heading id="interviews" mb="2rem" textAlign="center" as="h2" size="xl">
          Interviews of Sonny Nlewedim
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          rowGap="1rem"
          columnGap="4rem"
          justifyItems="center"
        >
          {allPosts.map((post) => {
            return (
              <Box w="300px" key={post.title}>
                <Img
                  w="100%"
                  h="70%"
                  objectFit="cover"
                  src={post.coverImage}
                  alt="Chief Nlewedim"
                  borderTopRadius="md"
                />
                <Box
                  borderBottomRadius="md"
                  bg="#F3F1F1"
                  boxShadow="lg"
                  px=".5rem"
                  py="1.5rem"
                >
                  <Heading
                    textAlign="center"
                    h="40px"
                    mb="1rem"
                    as="h5"
                    size="sm"
                  >
                    {post.title}
                  </Heading>

                  <Link href={`/interviews/${post.slug}`}>
                    <Flex justify="center">
                      <Button
                        boxShadow="inset 0px 1px 0px 0px #f5e9ef"
                        background="linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%)"
                        backgroundColor="#f9f9f9"
                        borderRadius="6px"
                        border="1px solid #dbbadb"
                        color="#8a2a21"
                        fontFamily="Arial"
                        fontSize="15px"
                        fontWeight="bold"
                        padding="6px 24px"
                        textDecoration="none"
                        textShadow="0px 1px 0px #ffffff"
                      >
                        See More
                      </Button>
                    </Flex>
                  </Link>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Container>

      <Footer />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "coverImage"]);

  return {
    props: { allPosts },
  };
}
