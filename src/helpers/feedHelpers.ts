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
    ambientTemperature: Number(feed.feeds[ 0 ].field1),
    entryId: Number(feed.feeds[ 0 ].entry_id),
    humidity: Number(feed.feeds[ 0 ].field2),
    bodyTemperature: Number(feed.feeds[ 0 ].field3),
    heartBeatRate: Number(feed.feeds[ 0 ].field4),
    bloodOxygenLevel: Number(feed.feeds[ 0 ].field5)
  };
  return data;
}


const FeedHelpers = {
  normalizeFeedData,
}

export default FeedHelpers