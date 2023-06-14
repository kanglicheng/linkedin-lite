import { Button, ChakraProvider, Checkbox, Container, Flex, FormControl, FormLabel, Grid, Heading, Icon, Input, Link, ListItem, OrderedList, Text, VStack } from '@chakra-ui/react';
import React from "react";

import { createClient } from '@supabase/supabase-js';
import { FaLinkedin } from "react-icons/fa";
import "./App.css";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

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
    margin: "12px",
  }

  const isDisabled = React.useMemo(()=>{
    if(!email || !first || !last){
      return true;
    }
    return false;
  }, [email, first, last])

  const insertLead = async () => {

    const roles = Array.from(checkedItems).join(';')
    const { data, error } = await supabase
    .from('Leads')
    .insert([
      { first: first, last: last, email: email, linkedin: linkedin, roles: roles },
    ])
    if(!error){
      setFirst('')
      setLast('')
      setEmail('')
      setLinkedin('')
      setCheckedItems(new Set());
    }
  }

  return (
    <ChakraProvider>

    <Flex direction="column" align={"center"} style={boxStyles}>
      <Heading as='h1' size='lg' noOfLines={1}>
      Quant Finance and Tech Interview Preparation
     </Heading>

      <Flex direction={"column"} align={"center"}>
        <Heading as='h3' size="md">
          About QFIN Interviews
        </Heading>
        <Text>
          We are a small and close-knit group of finance and technology professionals who are
          want to help candidates who are interested in the fields of finance and technology 
          get the best job that they can. We offer mock interviews, resume review, and general career coaching. Presently 
          we work mainly with new graduates and professionals with less than ~3 years of experience.
        </Text>

        <Heading as='h4' size="sm" style={{marginTop: "5px"}}>
          What We Offer
        </Heading>
        <Text>
          We have noticed that one of the biggest differentiator in job 
          search success is having access to <em>quality mock interviews.</em> We offer mock interviews that closely simulate the actual process and we take time 
          to give detailed and actionable feedback, including but not limited to customized study plans and suggested reading. We are also always happy to provide informal mentorship.
          We charge for mock interviews, $100-$130 per session because they require extensive commitment on our part. 
        </Text>
        <Heading as='h4' size="sm" style={{marginTop: "5px"}}>
          Our Process
        </Heading>
        <Text>
        </Text>
        <OrderedList>
          <ListItem>Fill out an application below</ListItem>
          <ListItem>Set up a 30 minute phone call to discuss background and career aspirations</ListItem>
          <ListItem>Intense and realistic interview preparation via a series of mock interviews, tailored according to the role(s) you 
            are applying and interviewing for
          </ListItem>
          <ListItem> Debrief with mock interviewer. Receive detailed feedback and specific recommendations for improvement</ListItem>
          <ListItem> Stay in touch. We are not here to just offer a set of mock interviews. We are here to aid in the job search process and will
            be available for further support.
          </ListItem>
        </OrderedList>
        <Heading as='h4' size="md" style={{marginTop: "10px"}}>
          About the Interviewers
        </Heading>
        <VStack spacing="2em" sx={{marginTop: "10px"}}>
          <Text>
            <em><b>Anish Shah</b> </em> <Link color='teal.600' href={"https://www.linkedin.com/in/anishshah500/"}><Icon as={FaLinkedin}/></Link> is currently a quantitative trader at <Link color='teal.600' href="https://www.mlp.com/">Millennium </Link> in Manhattan. 
            Previously he worked in quantitative research at Goldman Sachs and earned a Masters degree in quantitative finance (MSCF) from Carnegie Mellon 
            University. Anish has interviewed over one hundred candidates for the Strats role while employed at Goldman. He has also interviewed with over forty
            buy-side firms and top investment banks and as a result has deep and extensive knowledge of interviews in the financial industry. 
          
          </Text>
          <Text>
            <em><b>Stephen Cheng</b></em> <Link color='teal.600' href={"https://www.linkedin.com/in/kanglicheng/"}><Icon as={FaLinkedin}/></Link> is currently a Vice President of Technology at <Link color='teal.600' href="https://www.jpmorganchase.com/">JPMorgan and Chase. </Link> 
            In the past, Stephen has worked at Uber and Microsoft as a software engineer. Stephen has also mentored over a dozen individuals over the course of 6 months to a year 
            and his mentees are now all employed at top technology companies.
            He has interviewed with over 50 top technology companies, hedge funds, and investment banks for the role of software engineer.
          </Text>
          <Text>
            <em><b>Peter Scagnelli</b></em> is current a machine learning engineer at <Link color='teal.600' href="https://aws.amazon.com/">AWS Amazon. </Link> He has mentored over twenty individuals to help them
            obtain roles at top companies, including Google, Meta, Citadel, and IMC. He is a skilled negotiator and gives the toughest but also most helpful 
            mock behavioral interviews.
          </Text>
        </VStack>
      </Flex>
      <Container>
      <Heading as='h4' size="md" style={{marginTop: "10px"}}>
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
            <Input value={linkedin} type="url" onChange={(e)=>setLinkedin(e.target.value)}/>
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
          <Checkbox  onChange={handleCheck} value={'swe'} colorScheme='teal' size='md'  spacing='1rem' iconSize='1rem'>
            Other
          </Checkbox>
        </Grid>
          <Button mt={4} colorScheme='teal' type={"submit"} onClick={(e)=>insertLead()} isDisabled={isDisabled}>
            Submit
          </Button>
      </Container>
    </Flex>
    </ChakraProvider>
  );
}

export default App;
