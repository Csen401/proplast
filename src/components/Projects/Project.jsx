import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, description, disc } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h4>{description}</h4>
            <p>{disc}</p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 20rem;
    background-color:#0000;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit:contain ;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.200), rgba(0,0,0, 0.80));
        transition: transform 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: orange;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

`