import React from "react";
import AddFrom from "./AddFrom";
import tw from "tailwind-styled-components";
import { useState } from "react";

const Items = () => {
  const [getData, setData] = useState([
    { goal: "Do all exercises!", key: Math.random() * 100 },
  ]);

  const CopiedData = (data) => {
    setData((old) => {
      return [...data, ...old];
    });
  };
  const deletee = (id) => {
    const newlist = getData.filter((x) => x.key !== id);
    setData(newlist);
  };

  console.log(CopiedData);

  const Nothing = <ErrorPage >Empty!</ErrorPage>;
  const resul = getData.map((data) => {
    return <GoalItem onClick={() => deletee(data.key)}>{data.goal}</GoalItem>;
  });
  return (
    <Wrapper>
      <FormAdd>
        <AddFrom copiedFunction={CopiedData} />
      </FormAdd>
      <ItemsSection>{getData.length>0?resul:Nothing}</ItemsSection>
    </Wrapper>
  );
};
const GoalItem = tw.div`text-center text-3xl font-mono bg-green-300 mr-80 ml-80 py-4 rounded-full mt-3  text-white  `;
const Wrapper = tw.div``;
const FormAdd = tw.div``;
const ItemsSection = tw.div`overflow-y-scroll h-80 flex-col justify-center`;
const ErrorPage = tw.div`text-red-800 text-center text-3xl font-mono`;
export default Items;
