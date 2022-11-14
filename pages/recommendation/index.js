import React, { Fragment, useContext, useState, useEffect } from 'react';
import CategoryProvider from '../../store/CategoryProvider';
import CategoryContext from '../../store/category-context';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';



function index() {
  const router = useRouter();
  const catCtx = useContext(CategoryContext)
    const questions = catCtx.questions;
    
    const [value, setValue] = useState('');
    const [questionNumber, setQuestionNumber] = useState(-1)
    const [testActive, setTestActive] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const next = () => {
    if (questionNumber === -1) {
      let number = questionNumber + 1;
    setQuestionNumber(number)
    setTestActive(true)
    setValue('');
    }
    else if (questionNumber === 5 ) {
      setTestActive(false)
    }
    else if (value === 'No') {
      setTestActive(false)
      const subject = questions[questionNumber].category
      router.push('/recommendation/' + subject)
    }

    let number = questionNumber + 1;
    setQuestionNumber(number)
    setValue('');
  }
  const back = () => {
    if (questionNumber === 0) {
      setTestActive(false)
      let number = questionNumber - 1;
    setQuestionNumber(number)
    setValue('');
    }
    let number = questionNumber -1;
    setQuestionNumber(number)
  }
  

  const selectedButtonStyle = {
    borderRadius: 35,
        backgroundColor: "#444",
        fontSize: "1.25vh",
        marginTop: 10,
        marginBottom: 10,
        padding: 13,
        fontWeight: 'bold',
        width: '11vh',
        color: 'white',
        boxShadow:'1px 1px 5px rgba(63, 180, 254, 0.6), 1px 1px 5px rgba(63, 180, 254, 0.6)'
  }
  const startButtonStyle = {
    borderRadius: 35,
        backgroundColor: "#444",
        fontSize: "1.25vh",
        marginTop: 10,
        marginBottom: 10,
        padding: 13,
        fontWeight: 'bold',
        width: '50%',
        color: 'white',
        boxShadow:'1px 1px 5px rgba(63, 180, 254, 0.6), 1px 1px 5px rgba(63, 180, 254, 0.6)'
  }
const intro = (<Box sx={{display: 'flex', flexDirection: 'column', justifyContent: "center"}}>
<Typography sx={{textAlign: 'center', fontWeight: 'bold', fontSize: '3vh', margin: 'auto', width: '70%'}}>This test will give you some direction if you are feeling lost. click the button below to get started.</Typography>
<Box sx={{display: 'flex', justifyContent: 'center', marginTop: '10vh'}}>
<Button style={startButtonStyle} variant="contained"  onClick={next}>Get started</Button>
</Box>
</Box> )

const outro = (<Box sx={{mx: {xs:'1vh', md: '5vh'}, }}>
<Typography sx={{fontWeight: 'bold', fontSize: {md: '3vh'}}}>
It looks like you have a pretty good foundation on the drums. Everyone learns differently and it depends on what kind of drummer you want to be, so although I can't give specific recommendations suited to every individual, learning different things and practicing is only going to help. Look through any of the categories on the categories page or search for a specific topic you're interested in in the search bar. If you feel like you still need more guidance, check out possibly getting a membership to one of the thorough course websites like Drumeo or Drum Beats Online (DBO Academy). Or look around near you for in person lessons.
  </Typography> 

  <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '5vh'}}>
  <Stack direction="row" spacing={3}>
<Button onClick={() => router.push('/')}>Go home</Button>
<Button onClick={() => router.push('/categories')}>Go to categories</Button>
</Stack>
</Box>

  </Box> )
  return (
    <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: "column", alignItems: 'center', my: {xs:'15vh', sm:'25vh'}}}>
     {questionNumber === -1 && intro}
     { testActive && (
     <Fragment><Box sx={{mx: 'auto',  }}>
    <Typography sx={{mx: 'auto', px: '1.5vh', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: '4vh' }}>
      {questions[questionNumber].question}
      </Typography>
     </Box>

     <Box sx={{textAlign: 'center', marginTop: '4vh'}}>
     <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        
        onChange={handleChange}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    </Box>

    <Box sx={{width: {xs:"100%", md:  '40%'}, height:'100%', marginTop: '5vh', display: 'flex', justifyContent: 'space-between', alignItems: 'end', }}>
    <Button style={selectedButtonStyle} variant="contained" onClick={back} sx={{marginLeft: '2vh'}}>Back</Button>
    <Button style={selectedButtonStyle} variant="contained"  onClick={next} sx={{marginRight: '2vh'}}>Next</Button>
    </Box>
    </Fragment>)
    }
  {questionNumber === 6 && outro}
    </Box>
  )
}

export default index