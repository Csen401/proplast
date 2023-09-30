import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc, title } = props;
  return (
    <Container>
        <span className='orange'><Icon/></span>
        <h1>{title}</h1>
        <p>{disc}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
    background-image: linear-gradient(90deg, #ffffff 0%, #cbcbcb 100%);    
    padding: 3rem;
    text-align: center;
    span{
        font-size: 3rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.9rem;
    }
`