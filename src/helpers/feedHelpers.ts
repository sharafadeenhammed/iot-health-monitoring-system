import type { Feed, NormarlizedFeedData } from "../../types/feed"


const normalizeFeedData = (feed: Feed): NormarlizedFeedData => {
  const data: NormarlizedFeedData = {
    ...feed.channel,
    last_feed_entry_at: feed.feeds[ 0 ].created_at,
    field1Name: "Ambient Temperature",
    field2Name: "Humidity",
    field3Name: "Body Temperature",
    field4Name: "Heart Beat Rate Per Minite",
    field5Name: "Blood Oxygen Level",
    entryId: Number(feed.feeds[ 0 ].entry_id || 0),
    ambientTemperature: Number(feed.feeds[ 0 ].field1 || 0),
    humidity: Number(feed.feeds[ 0 ].field2 || 0),
    bodyTemperature: Number(feed.feeds[ 0 ].field3 || 0),
    heartBeatRate: Number(feed.feeds[ 0 ].field4 || 0),
    bloodOxygenLevel: Number(feed.feeds[ 0 ].field5 || 0)
  };
  return data;
}


const FeedHelpers = {
  normalizeFeedData,
}

export default FeedHelpers