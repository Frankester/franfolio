import { useState } from 'react'

type useOpenCloseValue = [openClose: boolean, handleOpenClose: (value?: boolean) => void]

function useOpenClose(initialValue?: boolean):useOpenCloseValue {
  const [openClose, setOpenClose] = useState<boolean>(() => initialValue? initialValue : false)

  const handleChange = (value?: boolean) => {
    if(value !== undefined){
      setOpenClose(value)
    } else {
      setOpenClose(currentValue => !currentValue)
    }
  }

  return [openClose, handleChange]
}

export default useOpenClose