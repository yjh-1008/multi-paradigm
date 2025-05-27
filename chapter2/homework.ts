function toggleLoadingIndicator(show: boolean) {
  if (show) {
    console.log("Loading...");
  } else {
    console.log("Loaded");
  }
}

function getFriends(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["John", "Jane", "Jim"]);
    }, 1000);
  });
}

function delay(ms: number, message: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, ms);
  });
}

async function renderFriendsPicker(): Promise<void> {
  const friendsPromise = getFriends();

  const result = await Promise.race([friendsPromise, delay(1000, "isSlow")]);

  if (result === "isSlow") {
    toggleLoadingIndicator(true);
  } else {
    toggleLoadingIndicator(false);
  }

  const friends = await friendsPromise;
  console.log(friends);
}
