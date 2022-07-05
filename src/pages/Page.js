import React from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  const { botId } = useParams();
  return (
    <div>
      <h1> <center>Bot Page: {botId ? botId : 1}</center></h1>
    </div>
  );
};

export default Page;
