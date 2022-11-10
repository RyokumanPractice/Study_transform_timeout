import { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const DoorBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 1s;
  transform-origin: 0;
  background-color: ${(props) => {
    if (props.color === "red") return "rgba(255, 0, 0, 0.7)";
    else if (props.color === "blue") return "rgba(0, 0, 255, 0.7)";
    else return "rgba(0, 255, 0, 0.7)";
  }};
`;

const Stage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: #333;

  ${(props) => {
    if (props.bool)
      return css`
        & ${DoorBody} {
          transform: perspective(1000px) rotateY(-180deg);
        }
      `;
  }}
`;

const Ball = styled.div`
  top: 50px;
  left: 24px;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: grey;
`;

const Door = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
`;

const DoorBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
`;

function Test() {
  const [bool, setBool] = useState(false);
  const navigate = useNavigate();

  return (
    <Stage bool={bool}>
      <Door>
        <DoorBack>
          <Ball />
        </DoorBack>
        <DoorBody color="red" />
      </Door>
      <Door>
        <DoorBack>
          <Ball />
        </DoorBack>
        <DoorBody color="blue" />
      </Door>
      <Door>
        <DoorBack>
          <Ball />
        </DoorBack>
        <DoorBody color="green" />
      </Door>
      <button
        onClick={() => {
          setBool(!bool);
          setTimeout(() => {
            console.log("hello");
            navigate("../2");
          }, 1100);
        }}
      >
        open
      </button>
    </Stage>
  );
}

export default Test;
