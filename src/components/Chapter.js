import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const EachEpisode = styled.div``;

const EpisodeContainer = styled.div`
  max-height: 100px;
  overflow: scroll;
  margin-top: 5px;
`;

const Chapter = ({ chapters }) => {
  const [ episodeDetails, setEpisodeDetails ] = useState([]);

  useEffect(() => {
    async function fetchAll() {
      const results = await Promise.all(chapters.map((chapter) => fetch(chapter).then((r) => r.json())));
      setEpisodeDetails(results);
    }

    fetchAll();
  }, [chapters]);

  return (
    <EpisodeContainer>
      {episodeDetails.map((episodeDetail) => (
        <EachEpisode key = {episodeDetail.id}>{episodeDetail.name}</EachEpisode>
      ))}
    </EpisodeContainer>

    )
};

export default Chapter