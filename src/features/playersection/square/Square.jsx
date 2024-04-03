import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buttonClicked } from "./squareSlice";

const Square = ({ index }) => {
  const value = useSelector((state) => state.square.squares[index]);
  const dispatch = useDispatch();
  const clickButton = () => {
    dispatch(buttonClicked({ index }));
  };

  return (
    <button className="square" onClick={clickButton}>
      {value}
    </button>
  );
};

export default Square;
