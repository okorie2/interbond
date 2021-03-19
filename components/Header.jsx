import {
  Flex,
  Heading,
  Box,
  Img,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRef, Fragment } from "react";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Fragment>
      <Flex align="center" justify="space-between">
        <Link href="/">
          <Flex align="baseline">
            <Box mr=".5rem">
              <Img src="/favicon.ico" alt="interbond" />
            </Box>
            <Heading
              cursor="pointer"
              as="h6"
              size="md"
              textTransform="uppercase"
            >
              Interbond
            </Heading>
          </Flex>
        </Link>
        <Flex display={{ base: "none", md: "flex" }}>
          <Box mx=".5rem">
            <Link href="/#interviews">Interviews</Link>
          </Box>
          <Box mx=".5rem">
            <Link href="/industries">Interbond Industries</Link>
          </Box>
        </Flex>
        <HamburgerIcon
          ref={btnRef}
          w={7}
          h={7}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Interbond</DrawerHeader>

            <DrawerBody>
              <Box color="brand.900">
                <Link href="/#interviews">Interviews</Link>
              </Box>
              <Box color="brand.900">
                <Link href="/industries">Interbond Industries</Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Fragment>
  );
}

export default Header;
