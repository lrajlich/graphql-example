import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CHARACTERS_QUERY } from './queries'

const Characters = () => {
  const { data } = useQuery(CHARACTERS_QUERY);

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}

export default Characters;