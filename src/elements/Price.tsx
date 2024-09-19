import { Elements } from '../contracts'

export function Price (props: Elements.PriceDataContract) {
  return (
    <div>
      <h1>{ props.price }</h1>
      <h3>{ props.salePrice }</h3>
    </div>
  )
}