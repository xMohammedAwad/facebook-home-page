import NewFeedItem from "./NewFeedItem";

const NewsFeed = () => {
  return (
    <div className="news-feed">
      <NewFeedItem
        avatar={"/assets/user2.jpg"}
        username={"Esmaeel Alsafeen"}
        content={"Good morning from Gaza strip"}
        postImg={"/assets/story3.jpeg"}
      />
      <NewFeedItem
        avatar={"/assets/user3.jpg"}
        username={"muhmmed awad"}
        content={"free palestine"}
        postImg={"/assets/story2.jpeg"}
      />
      <NewFeedItem
        avatar={"/assets/user1.jpg"}
        username={"muhmmed awad"}
        content={"I love myself"}
      />
      <NewFeedItem
        avatar={"/assets/user2.jpg"}
        username={"Esmaeel Alsafeen"}
        content={"Good morning from Gaza strip"}
        postImg={"/assets/story3.jpeg"}
      />
    </div>
  );
};

export default NewsFeed;
