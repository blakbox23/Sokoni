import { useContext } from 'react'
import ProductsContext from '../ProductsContext'
import { ProductsContextType } from '../ProductsProvider'

const useProductsContext = ():ProductsContextType => useContext(ProductsContext)

export default useProductsContext