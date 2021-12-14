import React from "react";
import tw from "tailwind-styled-components";
import {useState} from 'react'



const AddFrom = ({copiedFunction}) => {
const [text,settext] = useState("")
  const TextHandler = (e) => {
    settext(e.target.value);
  };


  const SumbiteHandler = (e) => {
    e.preventDefault();

    const Datatext = [{
key:Math.random() * 100,
        goal:text,
    }]

    copiedFunction(Datatext);
    settext("");

  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={SumbiteHandler}>
          <Lable>
            <lable>Goal</lable>
          </Lable>
          <Goal>
            <Input type="text" placeholder="Enter a Text" onChange={TextHandler} value={text} required/>
          </Goal>
          <ButtonB>
            <Button type="submit" value="Submit" >
              Add Goal
            </Button>
          </ButtonB>
        </Form>
      
      </Container>

    </Wrapper>
  );
};
const ButtonB = tw.div`py-3 bg-gray-600 mt-3 px-4 w-1/2 text-white font-mono rounded-xl text-center  justify-center`;
const Button = tw.button`justify-center`;
const Lable = tw.div`mr-8 flex  justify-center text-xl text-gray-100 font-mono`;
const Goal = tw.div``;
const Wrapper = tw.div` `;
const Container = tw.div` relative px-7 flex justify-center  top-0  py-8  `;
const Form = tw.form`bg-green-400 px-60 py-20 rounded-2xl shadow-xl shadow-green-600  `;
const Input = tw.input`
px-9 py-3  align-center outline-none border-none rounded-xl hover:bg-green-100 
`;
export default AddFrom;
