import Image from 'next/image'
import {
  Code,
  Text,
  ListItem,
  OrderedList,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'

// Code Block
const CodeBlock = ({ children }) => {
  const backgroundColor = useColorModeValue('gray.50', 'dark.100')
  const borderColor = useColorModeValue('gray.200', 'dark.200')

  return (
    <Code
      w="full"
      mt={8}
      p={4}
      bg={backgroundColor}
      border="1px"
      borderColor={borderColor}
      borderRadius={3}
      overflowX="scroll"
    >
      {children}
    </Code>
  )
}

// Text
const H1 = ({ children }) => {
  return (
    <Text as="h1" fontWeight="semibold" fontSize="3xl">
      {children}
    </Text>
  )
}

const H2 = ({ children }) => {
  return (
    <Text as="h2" fontWeight="semibold" fontSize="2xl">
      {children}
    </Text>
  )
}

const H3 = ({ children }) => {
  return (
    <Text as="h3" fontWeight="semibold" fontSize="xl">
      {children}
    </Text>
  )
}

const P = ({ children }) => {
  const color = useColorModeValue('gray.700', 'gray.200')

  return (
    <Text mt={8} color={color}>
      {children}
    </Text>
  )
}

// Lists
const CustomUnorderedList = ({ children }) => {
  return (
    <UnorderedList mt={8} px={8}>
      {children}
    </UnorderedList>
  )
}

const CustomOrderedList = ({ children }) => {
  return (
    <OrderedList mt={8} px={8}>
      {children}
    </OrderedList>
  )
}

const CustomListItem = ({ children }) => {
  const color = useColorModeValue('gray.700', 'gray.200')

  return (
    <ListItem color={color} mt={2}>
      {children}
    </ListItem>
  )
}

export default {
  Image,
  code: CodeBlock,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: CustomUnorderedList,
  ol: CustomOrderedList,
  li: CustomListItem
}
