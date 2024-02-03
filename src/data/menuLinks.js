import { CgFormatJustify } from "react-icons/cg";
import { CgTrending } from "react-icons/cg";
import { BiBell, BiMessage, BiSolidMessage, BiVideo } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import { BiStats } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";
import { IoHelpCircle } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { MdLocalLibrary } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsActivity } from "react-icons/bs";
import { SiCodefactor } from "react-icons/si";
const menuLinks = [
  {
    title: "Home",
    to: "/",
    icon: <BiHomeAlt2 className="icon" fill="#ffa909" />,
  },
  // {
  //   title: "My Tasks",
  //   to: "myTasks",
  //   icon: <SiCodefactor className="icon" fill="#ffa909" />,
  // },
  {
    title: "Calander Schedules",
    to: "schedule",
    icon: <FaRegCalendarAlt className="icon" fill="#ffa909" />,
  },
  {
    title: "Project Overview",
    to: "overview",
    icon: <MdLocalLibrary className="icon" fill="#ffa909" />,
  },
  {
    title: "Report",
    to: "report",
    icon: <BsActivity className="icon" fill="#ffa909" />,
  },
  {
    title: "Team",
    to: "team",
    icon: <HiUserGroup className="icon" fill="#ffa909" />,
  },
  {
    title: "Message",
    to: "message",
    icon: <BiMessage className="icon" fill="#ffa909" />,
  },
  {
    title: "Video Conference",
    to: "videoconfrence",
    icon: <BiVideo className="icon" fill="#ffa909" />,
  },
  {
    title: "Add New Members",
    to: "addTodo",
    icon: <IoIosAddCircle className="icon" fill="tomato" />,
  },
];

export default menuLinks;
