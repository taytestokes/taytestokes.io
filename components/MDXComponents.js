import Image from 'next/image'
import {
  Code,
  Text,
  List,
  ListItem,
  ListIcon, // When I want to start having lists with icons :)
  OrderedList,
  UnorderedList
} from '@chakra-ui/react'

// Code Block
const CodeBlock = ({ children }) => {
  return (
    <Code
      w="full"
      mt={8}
      p={4}
      bg="gray.50"
      border="1px"
      borderColor="gray.200"
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
  return (
    <Text mt={8} color="gray.700">
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
  return (
    <ListItem color="gray.700" mt={2}>
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
