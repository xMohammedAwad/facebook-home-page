import "./NewsFeed.css"
const CreatePost = () => {
    return (
        <div className="create-post">
            <div className="post">
                <img src="/assets/avatar.jpg" alt="" className="post__user-img" />
                <input type="text" className="post__input" placeholder="What's on your mind, muhmmad?" />
            </div>
            <ul className="post__options">
                <li className="post__option post__live-video">
                    <img src="/assets/live.png" alt="post__live-video" className="post-options__img live-img" />
                    <strong>Live video</strong>
                </li>
                <li className="post__option post__photo/video">
                    <img src="/assets/photo.png" alt="photo/video" className="post-options__img photo/video-img" />
                    <strong>Photo /video</strong>
                </li>
                <li className="post__option post__feeling/activity">
                    <img src="/assets/feeling.png" alt="photo/video" className="post-options__img feeling/activity-img" />
                    <strong>Feeling /activity</strong>
                </li>

            </ul>
        </div>
    );
};

export default CreatePost;
