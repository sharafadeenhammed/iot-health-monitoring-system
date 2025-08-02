import type { JSXElementConstructor } from "react";
export type status =
  | "NORMAL"
  | "LOW"
  | "HIGH"
  | "ABNORMAL"
  | "NEUTRAL"
  | undefined;

interface CardInterface {
  header: string;
  additionalClass: unknown;
  tagline: string;
  size: number;
  color: string;
  value: string | number | undefined;
  unit: string;
  status: status;
  Icon: JSXElementConstructor<{
    size: number;
    color: string;
    className: string;
  }>;
}

function Card({
  size,
  color,
  tagline,
  header,
  additionalClass = "",
  value,
  unit,
  status,
  Icon = () => null,
}: CardInterface) {
  let backgroundColor = "bg-blue-900";
  if (status === "NORMAL") backgroundColor = "bg-blue-900";
  if (status === "LOW" && value !== 0) backgroundColor = "bg-orange-600";
  if ((status === "HIGH" || status === "ABNORMAL") && value !== 0)
    backgroundColor = "bg-red-800";
  return (
    <div className='h-full pb-2'>
      <div
        className={`mt-5 mx-2 my-4 font-extrabold px-3 py-4 h-fit rounded-none ${backgroundColor} box-border overflow-hidden md:w-[300px] w-full transition h-full ${additionalClass} `}
      >
        <div className=' justify-between items-start'>
          <h3 className=' font-medium text-[10px] text-sm text-white mb-3 '>
            {header}
          </h3>
          <div className='flex justify-between mb-3'>
            <p className='text-white text-left text-[8px] font-bold'>
              status &nbsp;: &nbsp;
            </p>
            <p
              // style={{ letterSpacing: "1px" }}
              className='border-2 border-white text-white rounded-2xl text-right px-1 py-[3px] text-[8px] font-bold '
            >
              {status === undefined ? "--- | ---" : status}
            </p>
          </div>
        </div>
        <div className='flex items-center justify-start '>
          <Icon className='mb-3 mr-4 mt-2' color={color} size={size} />
          <p className='text-2xl font-thin text-white'>
            {value || 0} {unit}
          </p>
        </div>
        <p className='text-white text-sm'>{tagline}</p>
      </div>
    </div>
  );
}

export default Card;
