import type { status } from "../components/Card";
type AdditionalClassNames = "animateLow" | "animateHigh" | "animateAbnormal" | undefined;

// validate heart rate reading with status
const validateHeart = (heartRatePerMinite: number | undefined): status => {
  // re evaluate this return statement
  if (heartRatePerMinite === undefined || heartRatePerMinite <= 0) return "NEUTRAL"
  if (heartRatePerMinite >= 60 && heartRatePerMinite <= 100) return "NORMAL"
  if (heartRatePerMinite < 40) return "LOW"
  if (heartRatePerMinite > 110) return "HIGH"
  return undefined
}

// validate ambient temperature reading with status
const validateAmbientTemperature = (ambientTemperature: number | undefined): status => {
  if (ambientTemperature === undefined || ambientTemperature <= 0) return "NEUTRAL";
  if (ambientTemperature >= 17 && ambientTemperature <= 38) return "NORMAL";
  if (ambientTemperature > 40) return "HIGH";
  if (ambientTemperature < 17) return "LOW";
  return undefined
}

// validate body temperature reading with status
const validateBodyTemperature = (bodyTemperature: number | undefined): status => {
  if (bodyTemperature === undefined || bodyTemperature <= 0) return "NEUTRAL";
  if (bodyTemperature >= 32 && bodyTemperature <= 37) return "NORMAL";
  if (bodyTemperature > 38) return "HIGH";
  if (bodyTemperature < 30) return "LOW";
  return "ABNORMAL"
}

// validate humidity reading with status
const validateHumidity = (humidity: number | undefined): status => {
  if (humidity === undefined || humidity <= 0) return "NEUTRAL";
  if (humidity >= 35 && humidity <= 70) return "NORMAL";
  if (humidity > 70) return "HIGH";
  if (humidity < 30) return "LOW";
  return undefined;
}

// validate blood oxygen level reading with status
const validateBloodOxygenLevel = (bloodOxygenLevel: number | undefined): status => {
  if (bloodOxygenLevel === undefined || bloodOxygenLevel <= 0) return "NEUTRAL";
  if (bloodOxygenLevel >= 93) return "NORMAL";
  if (bloodOxygenLevel < 90) return "LOW";
  return undefined;
}

const resolveStatusClassName = (status: status): AdditionalClassNames => {
  if (status === undefined || status === "NEUTRAL" || status === "NORMAL") return undefined;
  if (status === "LOW") return "animateLow";
  if (status === "HIGH") return "animateHigh";
  if (status === "ABNORMAL") return "animateAbnormal";
}

const ReadingValidators = {
  validateHeart,
  validateAmbientTemperature,
  validateBodyTemperature,
  validateHumidity,
  validateBloodOxygenLevel,
  resolveStatusClassName,
}

export default ReadingValidators;