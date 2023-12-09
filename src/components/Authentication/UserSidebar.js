import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import { Avatar, makeStyles } from '@mui/material';
import { useGlobalContext } from '../../Context';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { AiFillDelete,AiOutlineTrademarkCircle } from "react-icons/ai";
import { signOut } from 'firebase/auth';
import Userprofile from '../Userprofile';


export default function UserSidebar() {
  const { user, setAlert, watchlist, coins, symbol } = useGlobalContext();
  const [state, setState] = React.useState({

    right: false,
  });
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const logOut = () => {
    signOut(auth);
    setAlert({
      open: true,
      type: "success",
      message: "Logout Successfull !",
    });

    toggleDrawer();
  };

  const list = (anchor) => (
    <>

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      style={{backgroundColor:"yellow",}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
    </Box>
    </>
  );
  const removeFromWatchlist = async (coin) => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((wish) => wish !== coin?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Removed from the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };
  return (
    <div>
      {['right'].map((anchor) => (
        
      <React.Fragment key={anchor}>
      <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: "pointer",
              backgroundColor: "#EEBC1D",
            }}
            src={user.photoURL}
            alt={user.displayName || user.email}
          />
        <SwipeableDrawer

          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          <div style={{
            width: 350,
            padding: 25,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            fontFamily: "monospace",
            backgroundColor:"grey",
          }}>
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              height: "92%",
            }}>
              <Avatar
                style={{
                  width: 200,
                  height: 200,
                  cursor: "pointer",
                  backgroundColor: "#EEBC1D",
                  objectFit: "contain",
                }}
                src={user.photoURL}
                alt={user.displayName || user.email}
              />
              <span
                style={{
                  width: "100%",
                  fontSize: 25,
                  textAlign: "center",
                  fontWeight: "bolder",
                  wordWrap: "break-word",
                }}
              >
                {user.displayName || user.email}
              </span>
              <div style={{
                flex: 1,
                width: "100%",
                backgroundColor: "grey",
                borderRadius: 10,
                padding: 15,
                paddingTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                overflowY: "scroll",
              }}>
                <span style={{ fontSize: 15, textShadow: "0 0 5px black" }}>
                  Watchlist
                </span>
                {coins.map((coin) => {
                  if (watchlist.includes(coin.id))
                    return (
                      <div style={{
                        padding: 10,
                        borderRadius: 5,
                        color: "black",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#EEBC1D",
                        boxShadow: "0 0 3px black",
                      }}>
                        <span>{coin.name}</span>
                        <span style={{ display: "flex", gap: 8 }}>
                          {symbol}{" "}
                          {numberWithCommas(coin.current_price.toFixed(2))}
                          <AiFillDelete
                            style={{ cursor: "pointer" }}
                            fontSize="16"
                            onClick={() => removeFromWatchlist(coin)}
                          />
                        </span>
                      </div>
                    );
                  else return <></>;
                })}
              </div>
            </div>
            <Button
              variant="contained"
              style={{
                height: "8%",
                width: "100%",
                backgroundColor: "#EEBC1D",
                marginTop: 20,
              }}
              onClick={logOut}
            >
              Log Out
            </Button>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
      ))}
    </div>
  );
}