import React, { useEffect, useState,useContext,  } from 'react'
import { getJson } from '../api/hooks';
const GlobalContext = createContext()
export default function App() {
  const [list, setList] = useState([]);
  const [itemInfo, setItemInfo] = useState({});
  const [contextValue, setContextValue] = useState({
    info: itemInfo,
    changeInfo: info => {
      setItemInfo(info)
    }
  });
  useEffect(() => {
    getJson().then(res => {
      setList(res.data.cinemas)
    })
  }, []);
  return (
    <div></div>
    // <GlobalContext.Provider value={contextValue}>
    //  <div>
    //   {
    //     list.map(item => {
    //       return (
    //         <CinemasItem key={item.cinemaId}></CinemasItem>
    //       )
    //     })
    //   }
    //  </div>
    // </GlobalContext.Provider>
  )
}

function CinemasItem(props) {
const value = useContext(GlobalContext);
console.log(value)
  return (
    <GlobalContext.Consumer>

    </GlobalContext.Consumer>
  )
}
function CinemasDetails() {
  return (
    <GlobalContext.Consumer>

    </GlobalContext.Consumer>
  )

}