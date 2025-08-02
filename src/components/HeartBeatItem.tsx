import Card from "./Card";
import { MdOutlineMonitorHeart } from "react-icons/md";

interface HeartBeatItemProps {
  heartBeat?: number;
}
import ReadingValidators from "../helpers/readingValidator";
function HeartBeatItem({ heartBeat }: HeartBeatItemProps) {
  const status = ReadingValidators.validateHeart(heartBeat);

  const getTagline = (): string => {
    if (status === undefined || status === "NEUTRAL") return "";
    if (status === "NORMAL") return "Heart beat rate reading at normal level ";
    if (status === "ABNORMAL")
      return "Heart rate reading is irregular please consult a health professional";
    if (status === "HIGH")
      return "Heart rate level is too high if this persistit for more than a minite please consult a health professional";
    if (status === "LOW")
      return "Heart beat is low if this persist while patient is not sleeping consult with a health professional";
    return "Heart beat reading";
  };

  return (
    <div>
      {/* heart rate readings card */}
      <Card
        additionalClass={ReadingValidators.resolveStatusClassName(status)}
        Icon={MdOutlineMonitorHeart}
        size={50}
        color='#fff'
        header='Heart Beat Rate Per Minite'
        status={status}
        tagline={getTagline()}
        unit='b/m'
        value={heartBeat}
      />
    </div>
  );
}

export default HeartBeatItem;
