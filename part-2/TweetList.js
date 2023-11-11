function TweetList() {
  return (
    <div className="tweetList">
      <Tweet
        name="Marc"
        username="mc"
        date={new Date().toDateString()}
        message="New App!!!"
      />
      <Tweet
        name="Hayden"
        username="heyx"
        date={new Date().toDateString()}
        message="#Ilovehashtags"
      />
      <Tweet
        name="Bethany"
        username="beth"
        date={new Date().toDateString()}
        message="Surf is up!"
      />
    </div>
  );
}
