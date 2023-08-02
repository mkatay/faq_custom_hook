import React from "react";
import { useToggle } from "../hooks/useToggle";
import { ListGroupItem } from "reactstrap";

export const Question = ({title, info }) => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div className=" m-1">
      <ListGroupItem>
        <div className="d-flex align-items-center justify-content-between">
          <span>{title}</span>
          <span onClick={toggle}>
            {isToggled ? (
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </span>
        </div>
      </ListGroupItem>
      {isToggled && <ListGroupItem>{info}</ListGroupItem>}
    </div>
  );
};
