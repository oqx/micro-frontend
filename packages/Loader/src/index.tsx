import React from "react";
import PropTypes from "prop-types";
import Fetcher from "./Fetcher";
import "./styles.local.scss";

interface Props {
  token: string;
}

const _Loader: React.FunctionComponent<Props> = ({ token }) => {
  return (
    <React.Suspense fallback={<div>loading component</div>}>
      <Fetcher src={src} />
    </React.Suspense>
  );
};
_Loader.displayName = "Loader";

_Loader.propTypes = {
  token: PropTypes.string.isRequired
};

export default React.memo(_Loader);
