import { Flex, Text, Heading, Box, Img } from "@chakra-ui/react";
import Link from "next/link";
import { FaPhone, FaLinkedin } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";

function Footer() {
  return (
    <Box color="white" p="3rem" bg="#1D1C1E">
      <Flex flexWrap="wrap" justify="space-between">
        <Flex align="baseline">
          <Box mr=".5rem">
            <Img src="/favicon.ico" alt="interbond" />
          </Box>

          <Heading color="#8a2a21" as="h6" size="md" textTransform="uppercase">
            Interbond
          </Heading>
        </Flex>

        <Flex>
          <Link href="/industries">
            <Text mx=".5rem">OUR COMPANY</Text>
          </Link>
          <Text mx=".5rem">INTERVIEWS</Text>
        </Flex>
      </Flex>
      <Box my="1rem">
        <hr />
      </Box>
      <Flex flexWrap="wrap">
        <Box mr="2rem">
          <Text>INTERBOND INDUSTRIES</Text>
          <Text>9 Millitary Street, Onikan Lagos</Text>
          <Text>P.O Box 5609 Ikeja Lagos</Text>
        </Box>

        <Box mr="2rem">
          <Text>Contact Us</Text>
          <Flex align="center">
            <FaPhone />
            <Box display="inline-block" ml="1rem">
              08085034987
            </Box>
          </Flex>
          <Flex align="center">
            <VscGlobe />
            <Box display="inline-block" ml="1rem">
              interbondng.net
            </Box>
          </Flex>
          <a href="https://www.linkedin.com/in/sonny-u-nlewedim-22605623">
            {" "}
            <Flex align="center">
              <FaLinkedin />
              <Box display="inline-block" ml="1rem">
                Sonny Nlewedim
              </Box>
            </Flex>
          </a>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
