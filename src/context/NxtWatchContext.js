import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  videosList: [],
  changeTheme: () => {},
})

export default NxtWatchContext
