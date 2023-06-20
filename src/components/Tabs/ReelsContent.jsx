import ReelsItem from "./ReelsItem";

const ReelsContent = () => {
    return (
        <div className="ReelsContent-content">
            <ReelsItem CreateReel={true}/>
            <ReelsItem ReelImg={"/assets/story2.jpeg"} ViewsNumber={32}/>
            <ReelsItem ReelImg={"/assets/story3.jpeg"} ViewsNumber={650}/>
            <ReelsItem ReelImg={"/assets/story1.jpeg"} ViewsNumber={140}/>
            <ReelsItem ReelImg={"/assets/story2.jpeg"} ViewsNumber={47}/>
        </div>
    );
}

export default ReelsContent;

