const CreateComment = () => {
    return (
        <div className="create-comments">
                <div className="create-comments__username user-menu-item">
                    <img className="icon" src="/assets/avatar.jpg" alt="add" />
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="create-comments__input-wrapper">
                    <img src="/assets/comments.jpeg" alt="" />
                    <input type="text" className="create-comments__input post__input" placeholder="Write a comment..." />
                </div>
            </div>
    );
};

export default CreateComment;
