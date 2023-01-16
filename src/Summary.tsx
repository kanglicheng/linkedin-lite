import { AppUser } from "./App";

interface SummaryProps {
  mostLikedUser?: AppUser;
  mostCelebratedUser?: AppUser;
}

export const Summary = ({
  mostLikedUser,
  mostCelebratedUser,
}: SummaryProps) => {
  return (
    <>
      <h2>Activity Summary</h2>
      {mostLikedUser && (
        <div>
          Most liked user: {mostLikedUser?.name.first} with{" "}
          {mostLikedUser?.likes} {mostLikedUser.likes > 1 ? "likes" : "like"}
        </div>
      )}
      {mostCelebratedUser && (
        <div>
          Most celebrated user: {mostCelebratedUser?.name.first} with{" "}
          {mostCelebratedUser?.celebrates}{" "}
          {mostCelebratedUser.celebrates > 1 ? "celebrates" : "celebrate"}
        </div>
      )}
    </>
  );
};
