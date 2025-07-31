export interface Feed {
  channel: {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
    created_at: string;
    updated_at: string;
    last_entry_id: number;
  };
  feeds: [
    {
      created_at: string;
      entry_id: number;
      field1: string;
      field2: string;
      field3: string;
      field4: string;
      field5: string;
    }
  ];
}

export interface NormarlizedFeedData {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  entryId: number;
  field1Name: "Ambient Temperature";
  field2Name: "Humidity";
  field3Name: "Body Temperature";
  field4Name: "Heart Beat Rate Per Minite";
  field5Name: "Blood Oxygen Level";
  created_at: string;
  updated_at: string;
  last_feed_entry_at: string;
  last_entry_id: number;
  ambientTemperature: number;
  humidity: number;
  bodyTemperature: number;
  heartBeatRate: number;
  bloodOxygenLevel: number;
}