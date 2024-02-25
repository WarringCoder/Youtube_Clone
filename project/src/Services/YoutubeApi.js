import React, { useEffect, useState } from 'react';

const API_KEY = "AIzaSyCwyGcywlthiEn5Si0VoBER7rkh6dqyX-s";
const CHANNEL_ID = "UCixlkmZOHuly9d7l5c7lvWQ";

export const YTvideos = () => {
  const API_KEY = "AIzaSyCwyGcywlthiEn5Si0VoBER7rkh6dqyX-s";
  const CHANNEL_ID = "UCixlkmZOHuly9d7l5c7lvWQ";

  const YTvideos = () => {
    const [allvideos, setAllvideos] = useState([]);

    useEffect(() => {
      const fetchurl = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`;

      fetch(fetchurl)
        .then((response) => response.json())
        .then((resJson) => {
          if (resJson.items) {
            const result = resJson.items.map((doc) => ({
              ...doc,
              Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
            }));
            setAllvideos(result);
          } else {
            console.error("No 'items' property in response:", resJson);
          }
        })
        .catch((error) => {
          console.error("Error fetching YouTube videos:", error);
        });
    }, []);

    console.log(allvideos);
  };

  return (
    <div>
      {/* Burada videoları görüntüleyebilirsiniz */}
    </div>
  );
};
