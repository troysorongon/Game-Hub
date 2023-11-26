import { Heading } from '@chakra-ui/react'
import React from 'react'
import { gameQuery } from '../App'

interface Props{
  GameQuery: gameQuery;
}

const GameHeading = ({GameQuery} : Props) => {
  const heading = `${GameQuery.genre?.name || ''} ${GameQuery.platform?.name || ''} Games`

  return (
    <Heading as={'h1'} marginY={5} fontSize={'5xl'}>{heading}</Heading>
  )
}

export default GameHeading