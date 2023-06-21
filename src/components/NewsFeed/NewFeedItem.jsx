import CreateComment from "./CreateComment";
import LikeIcon from "/assets/likeIcon.svg"
const NewFeedItem = ({
    avatar,
    username,
    content,
    postImg }) => {
    return (
        <div className="feed">
            <div className="feed__header">
                <img src={avatar} alt="" className="feed__user-img post__user-img" />
                <div className="post-username">
                    <strong className="feed__username">{username}</strong>
                    <span className="feed__post-date">June 13 at 11:40 AM . <i class="fas fa-globe-americas"></i></span>
                </div>

                <i class="fas fa-ellipsis-h"></i>
                <i class="fas fa-times"></i>

            </div>
            <div className="feed__body">
                {content}
                <img className="feed__body-img" src={postImg} alt="" />
            </div>
            <p className="post__likes-number">
                <img src={LikeIcon} alt="" className="likeIcon" /> 5
            </p>
            <ul className="feed__actions">
                <li className="feed__action feed__action--like">
                    <i class="fas fa-thumbs-up"></i> <strong> Like</strong>
                </li>
                <li className="feed__action feed__action--comment">
                    <i class="fas fa-comment-alt"></i> <strong> comment</strong>
                </li>
                <li className="feed__action feed__action--share">
                    <i class="fas fa-share"></i> <strong> share</strong>
                </li>
            </ul>
            <CreateComment />
        </div>
    );
};

export default NewFeedItem;
