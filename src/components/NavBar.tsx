import { HStack, Image, Text} from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBar from './SearchBar'

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack padding='15px'>
        <Image src={logo} boxSize="60px"></Image>
        <SearchBar onSearch={onSearch}></SearchBar>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar