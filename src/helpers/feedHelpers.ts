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
    ambientTemperature: feed.feeds[ 0 ].field1,
    entryId: feed.feeds[ 0 ].entry_id,
    humidity: feed.feeds[ 0 ].field2,
    bodyTemperature: feed.feeds[ 0 ].field3,
    heartBeatRate: feed.feeds[ 0 ].field4,
    bloodOxygenLevel: feed.feeds[ 0 ].field5
  };
  return data;
}


const FeedHelpers = {
  normalizeFeedData,
}

export default FeedHelpers