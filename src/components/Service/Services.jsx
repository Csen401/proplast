import React from "react";
import { RiUser3Line } from "react-icons/ri";
import { RiFileList2Line } from "react-icons/ri";
import { CgEye } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h1>
          Our <span className="orange">Mission and Vision</span>
        </h1>
        {/* <h2>What We Do</h2> */}
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={RiUser3Line}
            title={"Overview  "}
            disc={`Pro Plast company was founded in 1995 in Egypt. The business has been creating items in following the demands of the local market while placing a high focus on customer satisfaction.
            Additionally, important markets for our company's exports include Europe, Saudi Arabia, Kuwait, Sudan, Syria, and Libya. We manufacture a wide variety of straws for use in commerce or industry. Commercial items include straws in a variety of shapes, sizes, and colors that are flexible, artistic, loose, long, or short.
            Straws and sticks are examples of industrial items that are used in the production of juice, cotton buds, ice cream, and lollipops.  `}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={RiFileList2Line}
            title={"Mission"}
            disc={`Our mission is to assist customers in locating the most appropriate items for
             their disposable needs by working with local market requirements and producing products in accordance with market trends.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={CgEye}
            title={"Vision"}
            disc={`Our goal is to develop new products that satisfy consumer demand while 
            also enhancing the services we now provide. Plans are also being created to increase exports to new countries.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 85%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto, minmax(250px, 1fr));
  // auto-fit
  margin-top: 3rem;
  gap: 1rem;
`;
