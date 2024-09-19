import { Elements } from '../contracts'

export function Title (props: Elements.TitleDataContract) {
  return (
    <div>
      <h1>{ props.title }</h1>
      <h3>{ props.subTitle }</h3>
    </div>
  )
}