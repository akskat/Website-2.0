import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import image from "../../images/line-drawing-black (2).svg";
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="homeTop">
      <div className="textContainer">
        <h1>{t('home.title')}</h1>
        <p>{t('home.description')}</p>
        <div className="btnContainer">
          <Link to="/about">
            <button to="/about">
              <span>
                {t('home.aboutBtn')}
                <TrendingFlatIcon
                  className="arrow"
                  style={{fontSize:"2rem"}}
                />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="imageContainer">
        <img className="sideImage" src={image} alt="Line Drawing" />
      </div>
    </div>
  );
}

export default Home;
