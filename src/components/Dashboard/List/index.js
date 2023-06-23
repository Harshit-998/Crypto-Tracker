import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import { convertNumber } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.tr
        className="list-row"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Tooltip title="Coin Logo">
          <td className="td-image">
            <img
              src={coin.image}
              className="coin-logo td-coin-logo"
              alt={coin.name}
            />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol td-coin-symbol">{coin.symbol}</p>
              <p className="coin-name td-coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Price Change in 24Hrs" placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex td-chip-flex">
              <div className="price-chip td-price">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip chip-red td-price">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip chip-red td-icon">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Current Price" placement="bottom-start">
          <td>
            <h3
              className="coin-price td-center-align td-coin-price"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-start">
          <td>
            <p className="total-volume td-right-align td-total-volume td-coin-price">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
          <td className="desktop-td-mkt">
            <p className="market-cap td-right-align td-coin-price">
              ${coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
          <td className="mobile-td-mkt">
            <p className="market-cap td-right-align td-coin-price">
              ${convertNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
      </motion.tr>
    </Link>
  );
}

export default List;
