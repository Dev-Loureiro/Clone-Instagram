import "./style.css";
import PropTypes from "prop-types";

export default function RightContent({ srcImg, name, nickName }) {
  return (
    <div className="RightContent">
      <div className="yourProfile">
        <div>
          <div>
            <img className="borda-img" src={srcImg} alt="photoProfile" />
          </div>

          <div className="nameProfile">
            <span>{name}</span>
            <span>{nickName}</span>
          </div>
        </div>

        <div className="visit">
          <p>view profile</p>
        </div>
      </div>
    </div>
  );
}

RightContent.PropTypes = {
  scrImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
};
