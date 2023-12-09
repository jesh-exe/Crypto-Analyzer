// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import * as React from 'react';
import { tokens } from "../theme";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useGlobalContext } from '../Context';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { AiFillDelete } from "react-icons/ai";
import { signOut } from 'firebase/auth';
import Header from "./Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
import StatBox from "./StatBox";
// import ProgressCircle from "../../components/ProgressCircle";

export default function Userprofile (){
  const { user, setAlert, watchlist, coins, symbol } = useGlobalContext();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>

    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

       
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          className="bg-dark"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={watchlist.length}
            subtitle="coins added"
            progress="0.05"
            increase="0.5%"
            icon={
             
              <span class="material-icons" style={{ color: "gold", fontSize: "26px" }}>Number of coins</span>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          className="bg-dark"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1250"
            subtitle="Monthly"
            progress="0.21"
            increase="+21%"
            icon={
              
              <span class="material-icons" style={{ color: "gold", fontSize: "26px" }}>Profit percentage</span>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          className="bg-dark"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="4500"
            subtitle="Monthly"
            progress="0.50"
            increase="-5%"
            icon={
              
              <span class="material-icons" style={{ color: "gold", fontSize: "26px" }}>Loss percentage</span>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          className="bg-dark"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2000"
            subtitle="revenue generated"
            progress="0.80"
            increase="+25%"
            icon={
              
              <span class="material-icons" style={{ color: "gold", fontSize: "26px" }}>Best coin</span>
            }
          />
        </Box>
       </Box>

    </Box>
        {/* ROW 2 */}
        <div className='row mx-auto'>
          <div className='col-12 p-5 bg-dark text-secondary' >
          <h3 style={{ color: "gold", fontSize: "26px" }}>Your Saved Coins </h3>
          {coins.map((coin) => {
                  if (watchlist.includes(coin.id))
                    return (
                      <div className="w-100 m-2" style={{
                        padding: 10,
                        borderRadius: 5,
                        color: "grey",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "black",
                        boxShadow: "0 0 3px black",
                        fontSize: "20px",
                      }}>
                        <span>{coin.name}</span>
                        <span style={{ display: "flex", gap: 8 }}>
                          {symbol}{" "}
                          {numberWithCommas(coin.current_price.toFixed(2))}
                          
                        </span>
                      </div>
                    );
                  else return <></>;
                })}
          </div>
        </div>
            
    </>
  );
};