import React, { useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExcercises from '../components/SearchExcercises'
import Excercises from '../components/Excercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [excercises, setExcercises] = useState([])
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises 
      setExcercises={setExcercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart} 
      />
      <Excercises 
      setExcercises={setExcercises}
      bodyPart={bodyPart}
      excercises={excercises}
      />
    </Box>
  )
}

export default Home