export async function addMessage(message) {
  const response = await fetch(
    `${process.env.REACT_APP_FIREBASE_DOMAIN}/messages.json`,
    {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not send message.");
  }

  return null;
}

export async function addSubscriber(email) {
  const response = await fetch(
    `${process.env.REACT_APP_FIREBASE_DOMAIN}/subscriber.json`,
    {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not send message.");
  }

  return null;
}
