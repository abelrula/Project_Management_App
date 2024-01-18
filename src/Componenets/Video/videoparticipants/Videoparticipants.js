import React, { Fragment, useEffect, useState } from "react";
import "./videoparticipants.css";
import img1 from "../../../assets/worker1.jpg";
import img2 from "../../../assets/worker4.jpg";
import img3 from "../../../assets/worker3.jpg";
import img4 from "../../../assets/worker2.jpg";
import { BsCheck2, BsEmojiSmile, BsFillMicMuteFill } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { FaVideoSlash } from "react-icons/fa6";

const Videoparticipants = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch("http://localhost:3500/conversations/" + 5);
      console.log(res);
      const data = await res.json();
      setMessages(data);
      console.log(data);
    }
    fetchMessages();
  }, []);
  const images = [img1, img2, img3, img4];
  return (
    <>
      <div className="videoConference">
        <div>
          <div className="videoConference__header">
            <div className="videoConference__header-totalMembers">
              <p>trend participants</p>
              <span>20</span>
            </div>
            <p>Add user to call</p>
          </div>
          <div className="videoConference__JoinedMemberes">
            {images.map((img, i) => (
              <div className="videoConference__JoinedMemberes-memeber" key={i}>
                <img src={img} alt="user" />
              </div>
            ))}
          </div>
          <div className="videoConference__caller">
            <img src={img4} alt="user" />
          </div>
        </div>
        <div className="videoConference__particpants">
          <div className="videoConference__particpants__info">
            {images.map((img) => (
              <div className="videoConference__particpants__info-memeber">
                <img src={img} alt="user" />
                <div>
                  <BsFillMicMuteFill />
                  <FaVideoSlash />
                </div>
              </div>
            ))}
          </div>
          <div className="videoConference__meetingTaskList">
            <h3>Meeting Task list </h3>
            <ul>
              <li>
                <BsCheck2 />
                operating
              </li>
              <li>
                <BsCheck2 />
                performance evalutaion of the party
              </li>
              <li>
                <BsCheck2 />
                internal party consolidation
              </li>
            </ul>
          </div>
          <div className="videoConference__chatRoom">
            <h4>Meeting Task list </h4>
            <div className="videoConference__chatRoom__allMessages element-with-scroll">
              {messages?.message?.map((item, i) => (
                <Fragment key={i}>
                  <div className="videoConference__chatRoom__sender" key={i}>
                    <p className="videoConference__chatRoom__sender-message">
                      {item.sender}
                    </p>
                    <p className="videoConference__chatRoom__sender-timeSent">
                      at 12:24 pm
                    </p>
                  </div>
                  <div className="videoConference__chatRoom__reciever">
                    <p className="videoConference__chatRoom__reciever-message">
                      {item.reciever}
                    </p>
                    <p className="videoConference__chatRoom__reciever-timeSent">
                      at 12:24 pm
                    </p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="videoConference__chatRoom__TypingBox">
            <div>
              <GrAttachment fontSize={24} className="infoIcon" />
              <textarea type="text" placeholder="hy"></textarea>
              <BsEmojiSmile fontSize={24} className="infoIcon" />
            </div>
            <button>send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videoparticipants;
