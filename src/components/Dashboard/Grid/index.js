import React, { useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";

const Grid = ({ coin, delay, isWatchlistPage }) => {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className={`grid-container 
    ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}
        style={{ display: isWatchlistPage && !added && "none" }}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" alt="{coin.name}" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
          <div className="start-div">
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                if (added) {
                  removeFromWatchlist(coin.id);
                  setAdded(false);
                } else {
                  addToWatchlist(coin.id);
                  setAdded(true);
                }
              }}
            >
              {added ? (
                <StarRoundedIcon
                  className={`watchlist-icon ${
                    coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
                  sx={{ fontSize: "2rem !important" }}
                />
              ) : (
                <StarBorderRoundedIcon
                  className={`watchlist-icon ${
                    coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
                  sx={{ fontSize: "2rem !important" }}
                />
              )}
            </IconButton>
          </div>
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>

            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip  chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        {/* if u want add in string as like comm - ", " $14,234 this */}
        {/* just like that use '.toLocaleString()' */}
        <div className="info-container-coin">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>

          <p className="total_volume">
            Total Volume : {coin.total_volume.toLocaleString()}
          </p>
          <p className="total_volume">
            Market Cap : {coin.market_cap.toLocaleString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Grid;
