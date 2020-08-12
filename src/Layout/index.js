import styled from "styled-components";
import { Form } from "formik";

export const ContainerBox = styled.div`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 0.7rem;
  padding: 8rem 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-mainDark);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const Frag = styled.div`
display: flex;
justify-content:center;


`
export const WrapperBtn = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  width: 40%;
  justify-content:center;
  align-items:center;
  height:50rem;

`;

export const WrapperItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10rem;
  width:40%;
  height:50rem;
  
`;
export const WrappeOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: #0a0a0a;
 
 

`;





export const Btn = styled.button`
  height: 8rem;
  width: 15rem;
  background-color: #00ecec;
  color: black;
  border: none;
  margin: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 1.8rem;
  text-shadow: 0.1rem 0.1rem 0.2rem solid black;
  font-size: 1.8rem;
  box-shadow: 0.1rem 0.1rem 0.3rem solid black;
`;


export const CustomerName = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: black;
  color: #00ecec;
  margin: 3rem;
`;

export const Lb = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.8rem;
  margin-left: 2rem;
`;

export const Inp = styled.input`
  height: 18rem;
  border: 0;
  background-color: #313131;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  color: #7dfd0c;
  padding-left:15rem;
`;
export const WrapperItem = styled.div`
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  width: 90%;
  background-color: #313131;
  color: #00ecec;
  margin: 0.3rem;
  margin-left: 3rem;
  padding-left: 1rem;
`;

export const Rows = styled.tr`
  display: flex;
`;
export const Cells = styled.td`
  width: 100%;
  margin: 0.2rem;
  
`;
export const BtnDelete = styled.button`
  color: #fa6f08;
  border: none;
  background-color: transparent;
  font-size: 2rem;

  font-size: bold;
`;

export const WrapperItemT = styled.div`
  height: 10rem;
  display: flex;
  width: 90%;
  background-color: #313131;
  margin: 3rem;
  margin-left: 3rem;
  padding: 1rem;
`;

export const RowsT = styled.tr`
  font-size: 4rem;
  color: #7dfd0c;
   margin-left: 1rem;

`;

export const CellsT = styled.td`
  width: 100%;
 
  


`

export const BtnSent = styled.button`
  height: 4rem;
  width: 90%;
  background-color: #00ecec;
  color: black;
  border: none;
  margin: 3rem;
  font-size: bold;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 1rem;
  border-radius: 1.8rem;
  text-shadow: 0.1rem 0.1rem 0.2rem solid black;
  font-size: 1.8rem;
  box-shadow: 0.1rem 0.1rem 0.3rem solid black;
`;
