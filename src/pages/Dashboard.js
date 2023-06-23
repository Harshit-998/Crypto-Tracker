
import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import Search from "../components/Dashboard/Search";
import PaginationControlled from "../components/Dashboard/Pagination";
import Loader from "../components/Loader";
import BackToTop from "../components/Common/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import Footer from '../components/Common/Footer';



const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] =useState(true);
 
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value -1) * 10
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10))
  };
   
  


  const onSearchChange = (e) => {
       setSearch(e.target.value);
       console.log(e.target.value) ;
  };

  //  here filter the coins based the name or symbol
   var filteredCoins = coins.filter((item) => 
   item.name.toLowerCase().includes(search.toLowerCase()) || 
   item.symbol.toLowerCase().includes(search.toLowerCase())
   );
  
  useEffect( () => {
     getData();
      
  }, []);
  
  const getData = async () => {
     const myCoins = await get100Coins();
     if(myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
   setIsLoading(false);
     }
  }

  return (
  <> 
  <Header />
  { isLoading ? (
    <Loader />
  ) : (
    <div>
    <Search search={search} onSearchChange={onSearchChange}/>
    <TabsComponent  coins={ search ? filteredCoins : paginatedCoins} />

   {/* i don't want when i search it then paginated show on page that's why i write this type  */}
    
    {!search && (<PaginationControlled
       page={page}
      handlePageChange={handlePageChange}
    />) 
    }
   </div>
    
    )}

   <BackToTop />
   <Footer />
   </>
  )
}

export default DashboardPage;
