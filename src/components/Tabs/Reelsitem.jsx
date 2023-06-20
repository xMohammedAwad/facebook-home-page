const ReelsItem = (
    {
        ReelImg,
        ViewsNumber,
        CreateReel
    }) => {
    return (
        CreateReel ?
            <article className="ReelsItem createReel">
            </article >
            :
            <article className="ReelsItem">
                <img src={ReelImg}
                    alt=""
                    className="ReelsItem__main-img" />
                <strong className="ReelsItem__views-number" >
                    <i class="fas fa-play"> </i>
                    {ViewsNumber}K</strong>
                <div className="overlay"></div>
            </article >
    );
}

export default ReelsItem;

