import Header from './component/Home/Header/Header'
import ProductItem from './component/Home/products/page'
import MenProduct from './component/MenProduct/MenProduct'


export default function Home() {
  return (
    <div>
      <Header />
      <MenProduct />
      <ProductItem />
    </div>
  )
}
