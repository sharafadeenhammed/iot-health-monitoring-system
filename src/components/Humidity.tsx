import Card from "./Card";
import { IoIosWater } from "react-icons/io";

interface HumidityProps {
  humidity?: number;
}
import ReadingValidators from "../helpers/readingValidator";
function Humidity({ humidity }: HumidityProps) {
  const status = ReadingValidators.validateHumidity(humidity);

  const getTagline = (): string => {
    if (status === undefined || status === "NEUTRAL") return "";
    if (status === "NORMAL") return "Humidity is at normal level ";
    if (status === "ABNORMAL") return "Humidity level is abnormal";
    if (status === "HIGH")
      return "Humidity is high which may cause growth of infectious bacterial, turn off your humidifier device if you have an air conditioner installed turn it on to regulate humidity.";
    if (status === "LOW")
      return "Humidity is low turn on your humidifier device or air conditioner if installed to regulate humidity";
    return "Humidity Reading";
  };

  return (
    <div>
      {/* humidity readings card */}
      <Card
        additionalClass={ReadingValidators.resolveStatusClassName(status)}
        Icon={IoIosWater}
        size={50}
        color='#fff'
        header='Humidity'
        status={status}
        tagline={getTagline()}
        unit='%'
        value={humidity}
      />
    </div>
  );
}

export default Humidity;
