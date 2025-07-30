import axios from "axios";
import type { Feed } from "../types/feed";

const fetchReading = async () => {
  try {
    const response = await axios.get<Feed>("https://api.thingspeak.com/channels/3021121/feeds.json?api_key=DL1N0BGOCARN19W0&results=1");
    return response
  }
  catch (error) {
    console.log(error);
    return false;
  }
}

const ThingSpeakReadingService = {
  fetchReading
};


export default ThingSpeakReadingService;


