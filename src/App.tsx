import React from "react";

import { Box, Button, ChakraProvider, Checkbox, Container, FormControl, FormLabel, Grid, Heading, Input, Link, Text, VStack } from '@chakra-ui/react';
import "./App.css";

function App() {

  const [email, setEmail] = React.useState('');
  const [first, setFirst] = React.useState('');
  const [last, setLast] = React.useState('');
  const [linkedin, setLinkedin] = React.useState('');

  const [checkedItems, setCheckedItems] = React.useState(new Set());

  const handleCheck = (e) => {
    if(e.target.checked){
      setCheckedItems((prev)=> prev.add(e.target.value));
    }
    else{
      setCheckedItems((prev)=> {
        prev.delete(e.target.value);
        if(!prev){
          return new Set();
        }
        return prev;
      })
    }
  }

  const boxStyles = {
    margin: "10px"
  }

  return (
    <ChakraProvider>

    <Box sx={boxStyles}>
      <Heading as='h3' size='lg' noOfLines={1}>
      Quantitative Finance and Technology Interview Preparation
     </Heading>

      <Container sx={{margin: "10px"}}>
        <Heading as='h4' size="md">
          About QFIN Interviews
        </Heading>
        <Text>
          We are a small and close-knit group of finance and technology professionals who are
          want to help candidates who are interested in the fields of finance and technology 
          get the best job that they can. We offer mock interviews, resume review, and general career coaching. Presently 
          we work mainly with new graduates and professionals with less than ~3 years of experience.
        </Text>
        <Heading as='h4' size="md">
          About the Interviewers
        </Heading>
        <VStack spacing="2em" sx={{marginTop: "10px"}}>
          <Text>
            <em>Anish Shah </em>is currently a quantitative trader at <Link color='teal.500' href="https://www.mlp.com/">Millennium </Link> in Manhattan. 
            Previously he worked in quantitative research at Goldman Sachs and earned a Masters degree in quantitative finance (MSCF) from Carnegie Mellon 
            University. Anish has interviewed over one hundred candidates for the Strats role while employed at Goldman. He has also interviewed with over forty
            buy-side firms and top investment banks and as a result has deep and extensive knowledge of interviews in the financial industry.
          </Text>
          <Text>
            <em>Stephen Cheng</em> is currently a Vice President of Technology at <Link color='teal.500' href="https://www.jpmorganchase.com/">JPMorgan and Chase.</Link> 
            In the past, Stephen has worked at Uber and Microsoft as a software engineer. Stephen has also mentored three individuals who are now all employed at top technology companies.
            He has interviewed with over 50 top technology companies, hedge funds, and investment banks for the role of software engineer.
          </Text>

        </VStack>
      </Container>
      <Container>
      <Heading as='h4' size="md">
        Apply to work with us
      </Heading>
        <FormControl isRequired>
          <VStack spacing='10px'>
            <FormLabel>First name</FormLabel>
            <Input onChange={(e)=>setFirst(e.target.value)} value={first} placeholder='First name'  />
            <FormLabel>Last name</FormLabel>
            <Input value={last} placeholder='Last name' onChange={(e)=>setLast(e.target.value)} />
            <FormLabel>Email</FormLabel>
            <Input value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/>
          </VStack>
        </FormControl>
        <VStack spacing='10px'>
            <FormLabel>Linkedin Profile</FormLabel>
            <Input value={linkedin} type="url" onChange={(e)=>setEmail(e.target.value)}/>
        </VStack>
        <FormLabel as='legend'>
          Roles you are interested in
        </FormLabel>
        <Grid>
          <Checkbox value={'qd'}  onChange={handleCheck} colorScheme='teal' size='md'  spacing='1rem' iconSize='1rem'>
            Quantitative Developer (QD)
          </Checkbox>
          <Checkbox  onChange={handleCheck} value={'qr'}  colorScheme='teal' size='md'  spacing='1rem' iconSize='1rem'>
            Quantitative Researcher (QR)
          </Checkbox>
          <Checkbox  onChange={handleCheck} value={'qt'}  colorScheme='teal' size='md'  spacing='1rem' iconSize='1rem'>
            Quantitative Trader
          </Checkbox>
          <Checkbox  onChange={handleCheck} value={'trader'}  colorScheme='teal' size='md'  spacing='1rem' iconSize='1rem'>
            Trader
          </Checkbox>
          <Checkbox  onChange={handleCheck} value={'swe'} colorScheme='teal' size='md'  spacing='1rem' iconSize='1rem'>
            Software Developer
          </Checkbox>
        </Grid>
          <Button mt={4} colorScheme='teal' type={"submit"}>
            Submit
          </Button>
      </Container>
    </Box>
    </ChakraProvider>
  );
}

export default App;
