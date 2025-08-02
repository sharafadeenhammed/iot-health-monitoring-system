import { IoMdHeart } from "react-icons/io";
import moment from "moment";

interface HeaderProps {
  updatedAt?: string;
  entryId?: number;
}
function Header({ updatedAt, entryId }: HeaderProps) {
  return (
    <div className='sticky z-50 top-0 left-0 right-0 py-14 px-5 bg-blue-950 text-slate-300 rounded-b-[20px]'>
      {updatedAt ? (
        <p className='font-mono absolute top-1 right-2 text-right sm:text-center'>
          Last reading updated: {moment(updatedAt).fromNow()}
          {entryId ? (
            <span className='text-[10px] text-right block '>
              entry count: {entryId}{" "}
            </span>
          ) : null}
        </p>
      ) : null}
      <div className='flex justify-between items-start '>
        <p className='text-4xl font-mono font-extrabold text-left'>
          IOT Based <br /> Health Monitoring System{" "}
        </p>

        <IoMdHeart className='text-slate-300 animate-pulse' size={100} />
      </div>
    </div>
  );
}

export default Header;
