import Card from "./Card";
import { MdDeviceThermostat } from "react-icons/md";

interface AmbientTemperatureProps {
  ambientTemperature?: number;
}
import ReadingValidators from "../helpers/readingValidator";
function AmbientTemperature({ ambientTemperature }: AmbientTemperatureProps) {
  const status =
    ReadingValidators.validateAmbientTemperature(ambientTemperature);

  const getTagline = (): string => {
    if (status === undefined || status === "NEUTRAL") return "";
    if (status === "NORMAL") return "Ambient temperature is at normal level ";
    if (status === "ABNORMAL") return "Ambient temperature level is abnormal";
    if (status === "HIGH")
      return "Ambient temperature is high which may cause great discomfort and heat stroke to avoid this, turn on air conditioner if installed to regulate ambient temperature, else make sure there is good air flow accross your room";
    if (status === "LOW")
      return "Ambient Temperature is low turn on your heater  to increase ambient temperature";
    return "Ambient Temperature Reading";
  };

  return (
    <div>
      {/* humidity readings card */}
      <Card
        additionalClass={ReadingValidators.resolveStatusClassName(status)}
        Icon={MdDeviceThermostat}
        size={50}
        color='#fff'
        header='Ambient Temperature'
        status={status}
        tagline={getTagline()}
        unit='°C'
        value={ambientTemperature}
      />
    </div>
  );
}

export default AmbientTemperature;
