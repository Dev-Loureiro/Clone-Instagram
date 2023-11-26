import MenuItem from "./MenuItem";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { TiCompass } from "react-icons/ti";
import { ImFilm } from "react-icons/im";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { BsList } from "react-icons/bs";

import "./style.css";
import "../../style/global.css";
import LogoEscrito from "../../assets/instagram_logo.png";
import { IconContext } from "react-icons";
import Logo from "./Logo";

export default function LeftContent() {
  return (
    <div className="LeftContent">
      <div className="MenuLogo" id="logo">
        <Logo urlImg={LogoEscrito} />
      </div>

      <div className="box-menu">
        <div className="Menu">
          <ul>
            <IconContext.Provider value={{ size: "26px" }}>
              <MenuItem icon={<GoHomeFill />} text="Home" />
              <MenuItem icon={<FiSearch />} text="Search" />
              <MenuItem icon={<TiCompass />} text="Explore" />
              <MenuItem icon={<ImFilm />} text="Reels" />
              <MenuItem icon={<RiMessengerLine />} text="Messages" />
              <MenuItem icon={<AiOutlineHeart />} text="Notifications" />
              <MenuItem icon={<FiPlusSquare />} text="Create" />
            </IconContext.Provider>

            <MenuItem
              icon={
                <img
                  className="Profile"
                  src="../src/assets/WhatsApp Image 2023-09-06 at 17.42.32.jpeg"
                  alt=""
                />
              }
              text="Profile"
            />
          </ul>
        </div>

        <div className="more">
          <IconContext.Provider value={{ size: "26px" }}>
            <MenuItem icon={<BsList />} text="More" />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
