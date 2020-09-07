import React from "react";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";

const SearchContainer = ({ location: { search } }) => {
  const term = search.split("=")[1];
  const { data, loading } = useQuery(SEARCH, {
    variables: {
      term,
    },
  });
  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
};

export default SearchContainer;
