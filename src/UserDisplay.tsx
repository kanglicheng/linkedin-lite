import React from "react";

interface UserDisplayProps {
  firstName: string;
  lastName: string;
  userID: string;
}
export const UserDisplay = ({
  firstName,
  lastName,
  userID,
}: UserDisplayProps) => {
  const [interactions, setInteractions] = React.useState({
    likes: 0,
    celebrates: 0,
  });

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    const button = e.target as HTMLButtonElement;
    const buttonName = button.name;
    if (buttonName === "like") {
      setInteractions((prev) => {
        return { celebrates: 0, likes: prev.likes++ };
      });
    } else if (buttonName === "celebrate") {
      setInteractions((prev) => {
        return { celebrates: prev.celebrates++, likes: 0 };
      });
    }
  };

  return (
    <div>
      <span>{firstName}</span>
      <span>{lastName}</span>
      <button name="like" onClick={handleClick}>
        Like {interactions.likes}
      </button>
      <button name="celebrate" onClick={handleClick}>
        Celebrate {interactions.celebrates}
      </button>
    </div>
  );
};
