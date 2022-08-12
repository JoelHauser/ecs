import React from 'react'
import styled from 'styled-components'
import BroadOcean from "../img/BroadOcean.jpg"


const Container = styled.div`
display: flex;

`
const Left = styled.div`
    width: 50%;
`

const Right = styled.div`
width: 50%;
`

const Image = styled.img`

`


const Feature = () => {
  return (
    <Container>
        <Left><Image src={BroadOcean}/></Left>
        <Right></Right>
        </Container>
  )
}

export default Feature