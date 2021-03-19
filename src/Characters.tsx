import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CHARACTERS_QUERY } from './queries';
import { charactersQuery, charactersQueryVariables } from './types/charactersQuery';

const Characters = () => {
  const { data } = useQuery<charactersQuery, charactersQueryVariables>(CHARACTERS_QUERY);

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}

export default Characters;