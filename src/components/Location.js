import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

const EachLocation = styled.div`
  margin-bottom: 10px;
`;

const Location = ({ location }) => {
  const [ locationDetails, setLocationDetails ] = useState([]);

  useEffect(() => {
    (async function () {
      let data = await fetch(location).then((res) => res.json());
      setLocationDetails(data);
    })();
  }, [location]);

  console.log ( locationDetails );
  let { dimension, residents, type } = locationDetails

  return (
    <Fragment>
      <EachLocation>Dimension Name: { dimension }</EachLocation>
      <EachLocation>Type : { type }</EachLocation>
      <EachLocation> Population: { residents?.length }</EachLocation>
    </Fragment>
  )
}

export default Location