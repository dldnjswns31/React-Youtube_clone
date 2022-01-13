import React from "react";

const VideoItem = (props) => (
  <>
    <img src={props.video.snippet.thumbnails.high.url} />
    <h1>{props.video.snippet.title}</h1>
    <h2>{props.video.snippet.channelTitle}</h2>
  </>
);

export default VideoItem;
