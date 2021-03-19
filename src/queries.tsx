import { gql } from 'apollo-boost';

export const CHARACTERS_QUERY = gql`
    query charactersQuery(
        $page: Int,
        $name: String,
        $status: String,
        $species: String,
        $type: String,
        $gender: String
    ) {
        characters(
            page: $page,
            filter: {
                name: $name,
                status: $status,
                species: $species,
                type: $type,
                gender: $gender
            })
        {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                image
            }
        }
    }
`;