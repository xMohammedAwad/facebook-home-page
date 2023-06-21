import "./ChatSidebar.css"
import ChatSidebarItem from "./ChatSidebarItem";
const ChatSidebar = () => {
  const contacts = [
    { img: "avatar.jpg", title: "Yousif Naim", haveStory: true },
    { img: "user1.jpg", title: "mostafa Naim", haveStory: false },
    { img: "user2.jpg", title: "muhmmad Yousif", haveStory: false },
    { img: "user3.jpg", title: "Yousif muhmmad", haveStory: true },
    { img: "user1.jpg", title: "muhmmad mostafa", haveStory: false },
    { img: "user2.jpg", title: "mostafa muhmmad", haveStory: true },
    { img: "user3.jpg", title: "Yousif mostafa", haveStory: false },
    { img: "avatar.jpg", title: "muhmmad Naim", haveStory: true },
    { img: "user2.jpg", title: "mostafa mostafa", haveStory: false },
    { img: "avatar.jpg", title: "Yousif Naim", haveStory: true },
    { img: "user1.jpg", title: "mostafa Naim", haveStory: false },
    { img: "user2.jpg", title: "muhmmad Yousif", haveStory: false },
    { img: "user3.jpg", title: "Yousif muhmmad", haveStory: true },
    { img: "user1.jpg", title: "muhmmad mostafa", haveStory: false },
    { img: "user2.jpg", title: "mostafa muhmmad", haveStory: true },
  ]
  return (
    <div className="chat-sidebar">
      <aside className="birthdays">
        <h4>Birthdays </h4>
        <img src="assets/bd.png" alt="" className="birthdays__img" />
        <strong className="birthdays__name">
          Yousif Naim's <small>birthday is today</small>
        </strong>
      </aside>
      <aside className="contacts">
        <div className="title">
          <h4>Contacts</h4>
          <ul className="contacts__icons">
            <li className="contacts__icon">
              <i class="fas fa-video    "></i>
            </li>
            <li className="contacts__icon">
              <i class="fa fa-search" aria-hidden="true"></i>
            </li>
            <li className="contacts__icon">
              <i class="fas fa-ellipsis-h"></i>
            </li>
          </ul>
        </div>
        <div className="contacts-names">
          {contacts.map((item) => {
            return <ChatSidebarItem
              img={item.img}
              title={item.title}
              haveStory={item.haveStory}
            />
          })
          }
          <div className="fa-edit-wrapper">
            <i class="fas fa-edit"></i>
          </div>
        </div>
      </aside>

    </div>
  );
};

export default ChatSidebar;
