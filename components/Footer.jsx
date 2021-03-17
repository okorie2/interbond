import { Flex, Text, Heading, Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box color="white" p="3rem" bg="#1D1C1E">
      <Flex flexWrap="wrap" justify="space-between">
        <Heading color="brand.700" as="h6" size="md" textTransform="uppercase">
          Interbond
        </Heading>
        <Flex>
          <Text mx=".5rem">OUR COMPANY</Text>
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
          <Text>Contact Us (Central Office)</Text>
          <Text>Phone: 08085034987</Text>
          <Text>M: interbondnig.com</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
