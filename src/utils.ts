import { AppUser } from "./App";

type interactionType = "likes" | "celebrates";

export const getHighestUser = (
  interactionType: interactionType,
  users: AppUser[] | undefined
): AppUser | undefined => {
  let maxInteractions = 0;
  let result = users ? users[0] : undefined;
  users?.forEach((user) => {
    if (user[interactionType] > maxInteractions) {
      maxInteractions = user[interactionType];
      result = user;
    }
  });

  if (result && result[interactionType] > 0) {
    return result;
  }
};
