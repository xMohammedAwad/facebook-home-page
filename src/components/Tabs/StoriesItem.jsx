const StoriesItem = (
    { avatar,
        storyImg,
        userName,
        CreateStory
    }) => {
    return (
        CreateStory ?
            <article className="StoriesItem">
                <i class="fas fa-plus CreateStory-btn"></i>
                <img src={storyImg} alt=""
                    className="StoriesItem__main-img CreateStory-img" />
                <div className="overlay"></div>

                <strong className="StoriesItem__user-name">
                    {userName}
                </strong>
            </article> :

            <article className="StoriesItem">
                <img src={avatar}
                    alt=""
                    className="StoriesItem__avatar avatar avatar--rounded " />
                <img src={storyImg}
                    alt=""
                    className="StoriesItem__main-img" />
                <div className="overlay"></div>
                <strong className="StoriesItem__user-name"> {userName}</strong>
            </article>
    );
}

export default StoriesItem;

