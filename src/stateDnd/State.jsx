import React from "react";
import Welcome from "../Page/admin/Dashboard/components/Welcome";
import TransactionFees from "../Page/admin/Dashboard/components/TransactionFees";
import BagMe from "../Page/admin/Dashboard/components/BagMe";
import Notice from "../Page/admin/Dashboard/components/Notice";
export const Setting = {
  padding: {
    t: 0,
    d: 0,
    l: 0,
    r: 0,
  },
  margin: {
    t: 0,
    d: 0,
    l: 0,
    r: 0,
  },
  color: { type: "" },
  bg: { type: "" },
  rou: {
    size: "",
  },
  grow: {
    size: "",
  },
  display: {
    flex: false,
    dir: "",
    jus: "",
    ite: "",
    gap: "",
  },
};
const StateCom = {
  1: {
    type: "Welcome",
    id:1,
    element: () => <Welcome />,
    ...Setting,
  },
  2: {
    type: "TransactionFees",
    id:2,
    element: () => <TransactionFees />,
    ...Setting,
  },
  3: {
    type: "BagMe",
    id:3,
    element: () => <BagMe />,
    ...Setting,
  },
  4: {
    type: "Notice",
    id:4,
    element: () => <Notice />,
    ...Setting,
  },
};

export default StateCom;
