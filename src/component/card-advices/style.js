import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 10px;
  min-height: 265px;
  width: 430px;
  border-radius: 10px;
  background-color: hsl(217, 19%, 24%);
  position: relative;

  @media (max-width: 600px) {
    width: 90%;
  }
`;
export const Id = styled.h2`
  font-size: 13px;
  color: hsl(150, 100%, 66%);

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
export const TextAdvice = styled.p`
  text-align: center;
  width: 400px;
  font-size: 21px;
  font-weight: 700;
  color: hsl(193, 38%, 86%);

  @media (max-width: 600px) {
    width: 300px;
  }
`;
export const line = styled.img`
  margin-bottom: 20px;
  width: 100%;
`;
export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: hsl(150, 100%, 66%);
  background-size: cover;
  cursor: pointer;
  position: absolute;
  top: 260px;
`;
