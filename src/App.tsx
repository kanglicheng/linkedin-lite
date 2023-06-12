import React from "react";

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import "./App.css";

function App() {

  const boxStyles = {
    margin: "10px"
  }

  return (
    <Box bg="ghostwhite" sx={boxStyles}>
      <Heading as='h2' size='3xl' noOfLines={1}>
      Quantitative Finance and Software Development Interview Preparation
     </Heading>

      <Container>
        <Heading as='h3'>
          About Us
        </Heading>
        <Text>
          We are a small and close-knit group of finance and technology professionals who are
          want to help candidates who are interested in the fields of finance and technology 
          get the best job that they can.
        </Text>
        <Text>
          Anish Shah is currently a quantitative trader at <a href="https://www.mlp.com/">Millennium </a> in Manhattan. Previously he 
          worked in quantitative research at Goldman Sachs and earned a Masters degree in quantitative finance (MSCF) from Carnegie Mellon 
          University. 
        </Text>
      </Container>  
    </Box>
  );
}

export default App;
