import { gql } from "apollo-boost";

export const SEARCH = gql`
  query search($term: String!) {
    searchUser(term: $term) {
      id
      avatar
      username
      amIFollowing
      isMyself
    }
    searchPost(term: $term) {
      id
      files {
        url
      }
      likeCount
      commentCount
    }
  }
`;
