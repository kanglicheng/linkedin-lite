import React from "react";

interface UserDisplayProps {
  firstName: string;
  lastName: string;
}
export const UserDisplay = ({ firstName, lastName }: UserDisplayProps) => {
  const [interactions, setInteractions] = React.useState({
    likes: 0,
    celebrates: 0,
  });

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    const button = e.target as HTMLButtonElement;
    const buttonName = button.name;
    if (buttonName === "like") {
      setInteractions((prev) => {
        return { celebrates: 0, likes: prev.likes + 1 };
      });
    } else if (buttonName === "celebrate") {
      setInteractions((prev) => {
        return { celebrates: prev.celebrates + 1, likes: 0 };
      });
    }
  };

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
          onClick={handleClick}
        >
          Like {interactions.likes}
        </button>
        <button
          style={{
            padding: "5px",
            border: "1px solid blue",
            backgroundColor: "whitesmoke",
          }}
          type="button"
          name="celebrate"
          onClick={handleClick}
        >
          Celebrate {interactions.celebrates}
        </button>
      </div>
    </div>
  );
};
