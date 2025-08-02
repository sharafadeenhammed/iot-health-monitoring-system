import Card from "./Card";
import { MdBloodtype } from "react-icons/md";

interface BloodOxygenLevelProps {
  bloodOxygenLevel?: number;
}
import ReadingValidators from "../helpers/readingValidator";
function BloodOxygenLevel({ bloodOxygenLevel }: BloodOxygenLevelProps) {
  const status = ReadingValidators.validateBloodOxygenLevel(bloodOxygenLevel);

  const getTagline = (): string => {
    if (status === undefined || status === "NEUTRAL") return "";
    if (status === "NORMAL") return "Blood oxygen is at normal level ";
    if (status === "ABNORMAL") return "Blood oxygen level is abnormal";
    if (status === "HIGH")
      return "Blood oxygen is high which may create unforseen health issues. please consult a health professional.";
    if (status === "LOW")
      return "Blood oxygen is low this may lead to dizzyness, unawerness, or unconsciousness please breath well, and get your room well ventilated with fresh air. but if it still persist consult a health professional";
    return "Blood Oxygen Reading";
  };

  return (
    <div>
      {/* humidity readings card */}
      <Card
        additionalClass={ReadingValidators.resolveStatusClassName(status)}
        Icon={MdBloodtype}
        size={50}
        color='#fff'
        header='Blood Oxygen Level'
        status={status}
        tagline={getTagline()}
        unit='%'
        value={bloodOxygenLevel}
      />
    </div>
  );
}

export default BloodOxygenLevel;
