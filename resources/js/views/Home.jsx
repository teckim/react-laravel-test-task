import { useState } from 'react'
import { Container, Stack } from '@mui/material'
import UniversitySearchBox from '../components/UniversitySearchBox'
import UniversityCard from '../components/UniversityCard'

function Home() {
  const [university, setUniversity] = useState(null)

  const handleSelect = (uniData) => {
    setUniversity(uniData)
  }

  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <UniversitySearchBox onSelect={handleSelect} />
        <UniversityCard university={university} />
      </Stack>
    </Container>
  )
}

export default Home
