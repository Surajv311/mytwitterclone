import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
// search icon from MaterialUI
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Check out !!! </h2>

        {/* embedding my tweet into the right side...  */}
        <TwitterTweetEmbed tweetId={"1324437190961623040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="imsurajv"
          options={{ height: 450 }}
        />

        <TwitterShareButton
          url={
            "https://avatars1.githubusercontent.com/u/59371846?s=400&u=d1b7db461d488b75423d7e1480b743f12e24840e&v=4"
          }
          options={{
            text: "#Learning only costs internet & interest!",
            via: "Surajv",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
