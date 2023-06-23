import  React, {useState} from 'react';
import Pagination from '@mui/material/Pagination';
import "./styles.css";


export default function PaginationControlled({page, handlePageChange}) {
  

  return (
    <div className='pagination-div'>
     <Pagination 
     count={10} 
     page={page} 
     onChange={(event, value) => handlePageChange(event, value)} 
        sx={{
        color: "var(--white)",
        "& .Mui-selected ": {
          backgroundColor: "var(--blue) !important",
          color: "#fff !important",
          borderColor: "var(--blue) !important",
        },
        // this .Mui-selected &  .MuiPaginationItem-ellipsis & .MuiPaginationItem-text are mui class
        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
          color: "var(--white)",
          border: "1px solid var(--grey)",
        },
      }}
     />
    </div>
  );
}