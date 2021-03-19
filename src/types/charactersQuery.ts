/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: charactersQuery
// ====================================================

export interface charactersQuery_characters_info {
  __typename: "Info";
  /**
   * The length of the response.
   */
  count: number | null;
  /**
   * The amount of pages.
   */
  pages: number | null;
  /**
   * Number of the next page (if it exists)
   */
  next: number | null;
  /**
   * Number of the previous page (if it exists)
   */
  prev: number | null;
}

export interface charactersQuery_characters_results {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * The type or subspecies of the character.
   */
  type: string | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
}

export interface charactersQuery_characters {
  __typename: "Characters";
  info: charactersQuery_characters_info | null;
  results: (charactersQuery_characters_results | null)[] | null;
}

export interface charactersQuery {
  /**
   * Get the list of all characters
   */
  characters: charactersQuery_characters | null;
}

export interface charactersQueryVariables {
  page?: number | null;
  name?: string | null;
  status?: string | null;
  species?: string | null;
  type?: string | null;
  gender?: string | null;
}
