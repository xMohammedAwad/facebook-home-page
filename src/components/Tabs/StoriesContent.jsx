import StoriesItem from "./StoriesItem";

const StoriesContent = () => {
    return (
        <div className="Stories-content">
            <StoriesItem CreateStory={true} avatar={"/assets/user1.jpg"} storyImg={"/assets/avatar.jpg"} userName={"create a story"}/>
            <StoriesItem avatar={"/assets/user1.jpg"} storyImg={"/assets/story1.jpeg"} userName={"yazan abu"}/>
            <StoriesItem avatar={"/assets/user2.jpg"} storyImg={"/assets/story2.jpeg"} userName={"sameh ibn"}/>
            <StoriesItem avatar={"/assets/user3.jpg"} storyImg={"/assets/story3.jpeg"} userName={"qasem jo "}/>
        </div>
    );
}

export default StoriesContent;

