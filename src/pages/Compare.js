import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header';
import SelectCoins from '../components/Compare/SelectCoins';
import SelectDays from '../components/Coin/SelectDays';
import { getedCoinData } from '../functions/getedCoinData';
import { coinObject } from '../functions/coinObject';
import { getCoinPrices } from '../functions/getCoinPrices';
import Loader from '../components/Loader';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import CoinChart from '../components/Coin/CoinChart';
import { settingChartData } from '../functions/settingChartData';
import PriceToggle from '../components/Coin/PriceToggle';
import Footer from '../components/Common/Footer';

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
        const prices1 = await getCoinPrices(crypto1, event.target.value, priceType)
        const prices2 = await getCoinPrices(crypto2, event.target.value, priceType)

        console.log("BOTH PRICES FETCHED", prices1, prices2);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
  }
  
  const handledPriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
        const prices1 = await getCoinPrices(crypto1, days, newType)
        const prices2 = await getCoinPrices(crypto2, days, newType)
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);

  };
  

  useEffect(() => {
    getTheData();
  }, []);

  async function getTheData() {
    setIsLoading(true);
    const data1 = await getedCoinData(crypto1);
    if (data1) {
      const data2 = await getedCoinData(crypto2);
      coinObject(setCrypto1Data, data1);

      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, priceType)
        const prices2 = await getCoinPrices(crypto2, days, priceType)

        console.log("BOTH PRICES FETCHED", prices1, prices2);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    }

  };


  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);

    if (isCoin2) {
      setCrypto2(event.target.value);
      console.log("crypto2 id", event.target.value);
      const data = await getedCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType)
      const prices2 = await getCoinPrices(crypto2, days, priceType)

      if (prices1.length > 0 && prices2.length > 0) {
        console.log("BOTH PRICES FETCHED", prices1, prices2);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }


    }

    else {
      setCrypto1(event.target.value);
      console.log("cryptol id", event.target.value);
      const data = await getedCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }


  };

 


  return (
    <div>
      <Header />

      {
        isLoading ? (
          <Loader />
        ) : (
          <>
            <div className='coins-days-flex'>
              <SelectCoins
                crypto1={crypto1}
                crypto2={crypto2}
                handleCoinChange={handleCoinChange}
              />

              <SelectDays days={days}
                handleDaysChange={handleDaysChange}
                noPTag={true} />

            </div>

             <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
              <List coin={crypto1Data} />
            </div>
           
            <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
              <List coin={crypto2Data} />
            </div>
            
            <div className="grey-wrapper">
            <PriceToggle
            priceType={priceType} 
            handledPriceTypeChange={handledPriceTypeChange}

            />
               <CoinChart 
               chartData={chartData} 
               priceType={priceType} 
               multiAxis={true}/>
            </div>

            <CoinInfo name={crypto1Data.name} desc={crypto1Data.desc} />
            <CoinInfo name={crypto2Data.name} desc={crypto2Data.desc} />
            
          </>
        )}

     <Footer />
    </div>
  )
}

export default ComparePage;
