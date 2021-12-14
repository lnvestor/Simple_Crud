import React from 'react'
import tw from 'tailwind-styled-components'
import Items from './Items'
const Home = () => {
    return (
        <Wrapper>
            <Items />
        </Wrapper>
    )
}

const Wrapper = tw.div``
export default Home
