import { useContext } from 'react'
import UserContext from '../UserContext'
import { UserContextType } from '../UserProvider'

const useUserContext = ():UserContextType => useContext(UserContext)

export default useUserContext