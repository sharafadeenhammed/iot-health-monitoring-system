import Card from "./Card";
import { MdThermostat } from "react-icons/md";

interface BodyTemperatureProps {
  bodyTemperature?: number;
}
import ReadingValidators from "../helpers/readingValidator";
function BodyTemperature({ bodyTemperature }: BodyTemperatureProps) {
  const status = ReadingValidators.validateBodyTemperature(bodyTemperature);

  const getTagline = (): string => {
    if (status === undefined || status === "NEUTRAL") return "";
    if (status === "NORMAL") return "Body temperature is at normal level ";
    if (status === "ABNORMAL")
      return "Body temperature reading is abnormal, please consult a health professional immediately";
    if (status === "HIGH")
      return "Body temperature is high if this persistit for more than 3 minite please take a rest from ongoing activity and consult with a health professional ";
    if (status === "LOW")
      return "Body temperature is low if this persist after an hour please consult health professional";
    return "Body temperature reading";
  };

  return (
    <div>
      {/* bosy temperature readings card */}
      <Card
        additionalClass={ReadingValidators.resolveStatusClassName(status)}
        Icon={MdThermostat}
        size={50}
        color='#fff'
        header='Body Temperature'
        status={status}
        tagline={getTagline()}
        unit='°C'
        value={bodyTemperature}
      />
    </div>
  );
}

export default BodyTemperature;
