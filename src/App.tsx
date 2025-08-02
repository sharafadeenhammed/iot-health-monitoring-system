import Header from "./Header";
import { useState, useEffect } from "react";
import type { NormarlizedFeedData } from "../types/feed";
import FeedHelpers from "./helpers/feedHelpers";
import ThingSpeakService from "../src/ThingSpeakService";
import HeartBeatItem from "./components/HeartBeatItem";
import BodyTemperature from "./components/BodyTemperature";
import Humidity from "./components/Humidity";
import AmbientTemperature from "./components/AmbientTemperature";
import BloodOxygenLevel from "./components/BloodOxygenLevel";

function App() {
  const [feed, setFeed] = useState<false | NormarlizedFeedData>(false);
  const fetchFeed = async () => {
    const response = await ThingSpeakService.fetchReading();
    if (response === false) return;
    const feedData = FeedHelpers.normalizeFeedData(response.data);
    setFeed(feedData);
  };
  useEffect(() => {
    fetchFeed(); // FETCH INITIAL FEED DATA

    // fetch feed data in 5s interval
    const timeout = setInterval(() => {
      fetchFeed();
    }, 5000);

    return () => clearInterval(timeout);
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <Header
        updatedAt={feed ? feed.last_feed_entry_at : undefined}
        entryId={feed ? feed.entryId : undefined}
      />
      <div className=' flex-none md:flex md:flex-wrap px-3'>
        <HeartBeatItem heartBeat={feed ? feed.heartBeatRate : undefined} />
        <BodyTemperature
          bodyTemperature={feed ? feed.bodyTemperature : undefined}
        />
        <Humidity humidity={feed ? feed.humidity : undefined} />
        <AmbientTemperature
          ambientTemperature={feed ? feed.ambientTemperature : undefined}
        />
        <BloodOxygenLevel
          bloodOxygenLevel={feed ? feed.bloodOxygenLevel : undefined}
        />
      </div>
    </div>
  );
}

export default App;
