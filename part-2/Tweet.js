// ## **Part 2**

// Define a *Tweet* component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

// Create an *App* component that renders at least three tweets.

// Style your *Tweet* component using a CSS class.

function Tweet({ name, username, date, message }) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <h3 className="username">{username}</h3>
      <h4>{date}</h4>
      <p>{message}</p>
    </div>
  );
}
