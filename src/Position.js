import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const X = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`;
const Y = styled.div`
  width: 100px;
  height: 100px;
  background: blue;
`;
const Z = styled.div`
  width: 100px;
  height: 100px;
  background: yellow;
`;

function Position() {
  const navigate = useNavigate();

  return (
    <div>
      <X />
      <div>
        <Y />
        <Z />
      </div>
      <button
        onClick={() => {
          navigate("../1");
        }}
      >
        here
      </button>
    </div>
  );
}

export default Position;
