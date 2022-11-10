import React, { Fragment, useContext, useState } from 'react';
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




function index() {
  const router = useRouter();
  const catCtx = useContext(CategoryContext)
    const questions = catCtx.questions;
    
    const [value, setValue] = useState('');
    const [questionNumber, setQuestionNumber] = useState(0)

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const next = () => {
    const subject = questions[questionNumber].category
    if (value === 'No') {
      router.push('/recommendation/' + subject)
    }
    let number = questionNumber + 1;
    setQuestionNumber(number)
    setValue('');
  }
  const back = () => {
    let number = questionNumber -1;
    setQuestionNumber(number)
  }
  console.log(value)

  return (
    <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: "column", alignItems: 'center', my: {xs:'15vh', sm:'25vh'}}}>
      <Box sx={{mx: 'auto',  }}>
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
    <Button variant="contained" onClick={back} sx={{marginLeft: '2vh'}}>Back</Button>
    <Button variant="contained"  onClick={next} sx={{marginRight: '2vh'}}>Next</Button>
    </Box>

    </Box>
  )
}

export default index