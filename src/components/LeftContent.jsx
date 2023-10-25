import MenuItem from "./MenuItem";
import { GoHomeFill } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import { TiCompass } from 'react-icons/ti';
import { ImFilm } from 'react-icons/im';
import { PiChatCircleDotsLight } from 'react-icons/pi';
import { AiOutlineHeart } from 'react-icons/ai'
import { FiPlusSquare } from 'react-icons/fi'
import { LuUserCircle2 } from 'react-icons/lu'
import { BsList } from 'react-icons/bs'






export default function LeftContent() {
    return (
        <div className="LeftContent">
            <div className="Alinhamento">
                <div className="Menu">
                    <div className="MenuLogo"> <img src="src\assets\Instagram_logo.png" alt="INSTRAGAM LOGO" /></div>
                    <ul>
                        <MenuItem icon={<GoHomeFill />} text="Home" />
                        <MenuItem icon={<FiSearch />} text="Search" />
                        <MenuItem icon={<TiCompass />} text="Explore" />
                        <MenuItem icon={<ImFilm />} text="Reels" />
                        <MenuItem icon={<PiChatCircleDotsLight />} text="Messages" />
                        <MenuItem icon={< AiOutlineHeart />} text="Notifications" />
                        <MenuItem icon={<FiPlusSquare />} text="Create" />
                        <MenuItem icon={<LuUserCircle2 />} text="Profile" />
                    </ul>
                </div>

                <div className="more">
                    <MenuItem icon={<BsList />} text="More" />
                </div>
            </div>

        </div>

    )
}