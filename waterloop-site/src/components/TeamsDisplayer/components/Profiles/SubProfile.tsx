import React from "react";
import styled from "styled-components";

import { ContactsType } from "../interfaces";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 975px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 265px;
  }
`;
const PortraitContainer = styled.div`
  flex-basis: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Portrait = styled.img`
  height: 100%;
  border-radius: 50% 50%;
  border: 4px solid #fbc531;
`;
const InfoContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: IBM Plex Sans;
  font-style: normal;
  color: #000000;
`;
const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  @media (max-width: 975px) {
    font-size: 24px;
  }
`;
const InfoPosition = styled.div`
  font-weight: 200;
  font-size: 14px;

  @media (max-width: 975px) {
    font-weight: 200;
    font-size: 20px;
  }
`;
const ContactsContainer = styled.div`
  display: flex;
`;
const Contact = styled.a`
  padding-right: 5px;
  height: 22px;
  width: 22px;

  @media (max-width: 975px) {
    padding-right: 10px;
    height: 30px;
    width: 30px;
  }
`;
const Icon = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

// List of icons for contact purposes
const ContactList = (props: ContactsType) => {
  return (
    <>
      {props.contacts.map((item, i) => {
        return (
          <Contact
            key={i}
            href={item.url}
            target="_blank"
            onClick={(event: any) => {
              event.stopPropagation();
            }}
          >
            <Icon src={item.icon} alt="link" />
          </Contact>
        );
      })}
    </>
  );
};

const SubProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
      <PortraitContainer>
        <Portrait src={props.portrait} alt="portrait" />
      </PortraitContainer>
      <InfoContainer>
        <InfoTitle>{props.name}</InfoTitle>
        <InfoPosition>{props.position}</InfoPosition>
        {/* <ContactsContainer>
            {props.contacts.length > 0 && <ContactList contacts={props.contacts}/>}
          </ContactsContainer> */}
      </InfoContainer>
    </Container>
  );
};

export default SubProfile;
