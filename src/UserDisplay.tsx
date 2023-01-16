import React from "react";

interface UserDisplayProps {
  firstName: string;
  lastName: string;
  uuid: string;
  likes: number;
  celebrates: number;
  handleClick: (buttonName: string, uuid: string) => void;
}
export const UserDisplay = ({
  firstName,
  lastName,
  likes,
  uuid,
  celebrates,
  handleClick,
}: UserDisplayProps) => {
  const userRowStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div style={userRowStyle}>
      <div>
        {firstName} {lastName}
      </div>
      <div>
        <button
          style={{
            padding: "5px",
            border: "1px solid blue",
            marginRight: "3px",
            backgroundColor: "whitesmoke",
          }}
          type="button"
          name="like"
          onClick={(e) => {
            const button = e.target as HTMLButtonElement;
            handleClick(button.name, uuid);
          }}
        >
          Like {likes}
        </button>
        <button
          style={{
            padding: "5px",
            border: "1px solid blue",
            backgroundColor: "whitesmoke",
          }}
          type="button"
          name="celebrate"
          onClick={(e) => {
            const button = e.target as HTMLButtonElement;
            handleClick(button.name, uuid);
          }}
        >
          Celebrate {celebrates}
        </button>
      </div>
    </div>
  );
};
