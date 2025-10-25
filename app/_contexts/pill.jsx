'use client';

import { createContext, useContext, useState } from 'react';

const PillContext = createContext();

export function PillProvider({ children }) {
   const [options, setOptions] = useState([]);
   const [selected, setSelected] = useState(0);
   const [persist, setPersist] = useState(true);
   // 0 - normal
   // 1 - menu
   // 2 - paginated (todo)
   const [mode, setMode] = useState(0);
   const [handleClick, setHandleClick] = useState(() => () => {});
   const [handleReload, setHandleReload] = useState(() => () => {});

   return (
      <PillContext.Provider
         value={{
            options,
            setOptions,
            selected,
            setSelected,
            persist,
            setPersist,
            mode,
            setMode,
            handleClick,
            setHandleClick,
            handleReload,
            setHandleReload,
         }}
      >
         {children}
      </PillContext.Provider>
   );
}

export function usePill() {
   return useContext(PillContext);
}
