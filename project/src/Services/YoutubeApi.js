import { useEffect, useState } from 'react';
import {useCategory} from '../Context/CategoryContext'

const API_KEY = "AIzaSyAk7MFNOKgjwgYyNNrcnSIFs7SQaPjlQ5o";

const YTServices = () => {
  const [allvideos, setAllvideos] = useState([]);
  const { category } = useCategory();

  useEffect(() => {
   const fetchurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=TR&videoCategoryId=${category}&key=${API_KEY}`;


    fetch(fetchurl)
      .then((response) => response.json())
      .then(async (resJson) => {
        if (resJson.items) {
          const videosWithChannelInfo = await Promise.all(resJson.items.map(async (doc) => {
            const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${doc.snippet.channelId}&key=${API_KEY}`;
            const channelResponse = await fetch(channelUrl);
            const channelJson = await channelResponse.json();

            const channelImage = channelJson.items[0]?.snippet?.thumbnails?.default?.url || '';

            return {
              ...doc,
              Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
              ChannelImage: channelImage,
            };
          }));

          setAllvideos(videosWithChannelInfo);
        } else {
          console.error("No 'items' property in response:", resJson);
        }
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });
  }, [category]);

  return allvideos;
};

export default YTServices;
