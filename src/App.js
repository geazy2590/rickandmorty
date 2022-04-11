import React, { Fragment, useEffect, useState } from 'react';
import Character from './components/Character';
import Pagination from './components/Pagination';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  text-align: center
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [characters, setCharacters] = useState([]);
  const { info, results } = characters;

  const CHARACTER_API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(CHARACTER_API).then((res) => res.json());
      setCharacters(data);
    })();
  }, [CHARACTER_API]);

  return (
    <Fragment>
      <StyledHeader>Rick and Morty</StyledHeader>
      <CardContainer>
        <Character results = { results }/>
      </CardContainer>
      <Pagination
        info={ info }
        pageNumber={ pageNumber }
        updatePageNumber={ updatePageNumber }
      />
    </Fragment>
  );
}




export default App;
