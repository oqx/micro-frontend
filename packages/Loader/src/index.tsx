import React from "react";
import PropTypes from "prop-types";
import Fetcher from "./Fetcher";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import "./styles.local.scss";

const ASSET_QUERY = gql`
  query {
    asset {
      src
    }
  }
`;

interface Props {
  token?: string;
}

const _Loader: React.FunctionComponent<Props> = ({ token }) => {
  const { loading, data } = useQuery(ASSET_QUERY);
  console.log(data, loading);
  return (
    <React.Suspense fallback={<div>loading component</div>}>
      {data && data.asset && <Fetcher src={data.asset.src} />}
    </React.Suspense>
  );
};
_Loader.displayName = "Loader";

_Loader.propTypes = {
  token: PropTypes.string
};

export default React.memo(_Loader);
