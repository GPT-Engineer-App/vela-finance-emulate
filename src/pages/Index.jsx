import { Container, Box, Text, VStack, HStack, Link, Spacer, Image, IconButton, Button } from "@chakra-ui/react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="green.500" minH="100vh" display="flex" flexDirection="column">
      <HStack p={4} justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Vela
        </Text>
        <HStack spacing={8}>
          <Button as="a" colorScheme="whiteAlpha" variant="outline" href="#about">
            About
          </Button>
          <Button as="a" colorScheme="whiteAlpha" variant="outline" href="#blog">
            Blog
          </Button>
          <Button as="a" colorScheme="whiteAlpha" variant="outline" href="#our-companies">
            Our Companies
          </Button>
        </HStack>
      </HStack>
      <Container centerContent maxW="container.md" bg="white" borderRadius="md" boxShadow="lg" p={8} mt={8} mb={8}>
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold" textAlign="center">
            Pushing the boundaries of Finance and AI.
          </Text>
          <Image src="https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMGdyYXBoaWN8ZW58MHx8fHwxNzE3MTgxMTM3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Graphic" />
        </VStack>
      </Container>
      <Spacer />
      <HStack p={4} justifyContent="space-between" bg="white" borderTop="1px" borderColor="gray.200">
        <HStack spacing={4}>
          <Link href="#terms">Terms and Conditions</Link>
          <Link href="#privacy">Privacy Policy</Link>
        </HStack>
        <HStack spacing={4}>
          <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton as="a" href="https://telegram.org" aria-label="Telegram" icon={<FaTelegram />} size="lg" />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Index;
