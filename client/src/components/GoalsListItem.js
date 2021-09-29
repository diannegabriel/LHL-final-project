import React, { useState, useEffect, useRef } from "react";
import "./GoalsListItem.scss";
import GoalUpdate from "./GoalUpdate";
import useData from "./../hooks/useData";
import Collapse from "react-bootstrap/Collapse";


export default function GoalsListItem({ goalId, status, title, goalType }) {
  const [open, setOpen] = useState(false);
  const { updateGoalStatus } = useData();

  const handleClick = () => {
    // updateGoalStatus({
    //   goalType: goalType,
    //   goalId: goalId,
    //   status: status,
    // });
    console.log(`submit called`);
  };

  let statusIcon = "";
  if (status === "complete") {
    statusIcon = <i class="nes-icon star"></i>;
  } else if (status === "incomplete") {
    statusIcon = <i class="nes-icon star is-empty"></i>;
  } else if (status === "in progress") {
    statusIcon = <i class="nes-icon star is-half"></i>;
  }

  return (
    <>
      <li className="goal-entry">
        <button onClick={handleClick} className="goals-status-name">
          {statusIcon}
        </button>
        <p className="goals-title-name">{title}</p>
        <div
          className="rpgui-icon sword edit-button"
          onClick={() => setOpen(!open)}
        ></div>
      </li>
      <Collapse in={open}>
        <div>
          <GoalUpdate />
        </div>
      </Collapse>
    </>
  );
}
