import React from "react";
import LinkFormList from "./LinkFormList";
import Preview from "./Preview";

const DashboardPage = (props) => {
  return (
    <section className="wrapper" style={{ display: "flex" }}>
      <LinkFormList />
      <Preview />
    </section>
  );
};

export default DashboardPage;
