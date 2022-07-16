import "./rightbar.css";
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img src="/assets/gift.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgcontainer">
              <img
                src="/assets/friend/friend.jpg"
                alt=""
                className="rightbarProfileImg"
              />
             
            </div>
            <span className="rightbarOnline"></span>
            <span className="rightbarUserName">afara</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgcontainer">
              <img
                src="/assets/friend/friend.jpg"
                alt=""
                className="rightbarProfileImg"
              />
             
            </div>
            <span className="rightbarOnline"></span>
            <span className="rightbarUserName">afara</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgcontainer">
              <img
                src="/assets/friend/friend.jpg"
                alt=""
                className="rightbarProfileImg"
              />
             
            </div>
            <span className="rightbarOnline"></span>
            <span className="rightbarUserName">afara</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgcontainer">
              <img
                src="/assets/friend/friend.jpg"
                alt=""
                className="rightbarProfileImg"
              />
             
            </div>
            <span className="rightbarOnline"></span>
            <span className="rightbarUserName">afara</span>
          </li>
             <li className="rightbarFriend">
            <div className="rightbarProfileImgcontainer">
              <img
                src="/assets/friend/friend.jpg"
                alt=""
                className="rightbarProfileImg"
              />
             
            </div>
            <span className="rightbarOnline"></span>
            <span className="rightbarUserName">afara</span>
          </li>
             <li className="rightbarFriend">
            <div className="rightbarProfileImgcontainer">
              <img
                src="/assets/friend/friend.jpg"
                alt=""
                className="rightbarProfileImg"
              />
             
            </div>
            <span className="rightbarOnline"></span>
            <span className="rightbarUserName">afara</span>
          </li>
             <li className="rightbarFriend">
            <div className="rightbarProfileImgcontainer">
              <img
                src="/assets/friend/friend.jpg"
                alt=""
                className="rightbarProfileImg"
              />
             
            </div>
            <span className="rightbarOnline"></span>
            <span className="rightbarUserName">afara</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
