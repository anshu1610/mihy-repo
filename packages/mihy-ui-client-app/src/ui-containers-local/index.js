import React from "react";
import Loadable from "react-loadable";
import LinearProgress from "mihy-ui-framework/ui-atoms/LinearSpinner";

const Loading = () => <LinearProgress />;
const TestContainers = Loadable({
  loader: () => import("./TestContainers"),
  loading: () => <Loading />
});

const BloodList = Loadable({
  loader: () => import("./BloodList"),
  loading: () => <Loading />
});

export {
  TestContainers,
  BloodList
}
