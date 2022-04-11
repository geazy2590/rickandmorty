import React from 'react';
import styled from 'styled-components';
import Chapter from './Chapter';
import Location from './Location';

const CharacterCard = styled.div`
  display: flex;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin: 10px;
  width: 500px;
`;

const CharacterDetailsContainer = styled.div`
  padding: 15px;
`;

const CharacterDetails = styled.p`
  font-size: 12px;
`;

const Character = ({ results }) => {
  let display;

  if (results) {
    display = results.map((character) => {
      let { id, image, name, status, location, origin, species, episode } = character;


      return (
        <CharacterCard key = { id }>
          <img src={ image } alt={ name }></img>
            <CharacterDetailsContainer>
              <CharacterDetails>Name: { name }</CharacterDetails>
              <CharacterDetails>Species: { species }</CharacterDetails>
              <CharacterDetails>Status: { status }</CharacterDetails>
              <CharacterDetails>Location Name: { location.name }</CharacterDetails>
              <CharacterDetails>Origin Name: { origin.name }</CharacterDetails>
              <CharacterDetails><Location location = { location.url }/></CharacterDetails>
              <CharacterDetails>List of Episodes: <Chapter chapters = { episode }/></CharacterDetails>
            </CharacterDetailsContainer>
        </CharacterCard>
      )
    })
  }
  else{
    display = "No characters to display"
  }

  return <>{display}</>
};

export default Character;
