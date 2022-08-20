import React from "react";
import styled from "styled-components";

const Point = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background: ${(props) => props.backgroundColor};
`;

const StatusPoint = ({ isActive }) => {
  return (
    <Point
      isActive={isActive}
      backgroundColor={isActive === true ? "#27AE60" : "#EB5757"}
    />
  );
};

export default StatusPoint;
