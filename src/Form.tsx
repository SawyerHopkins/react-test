import { FormDataContract, Elements } from './contracts'

import { Title, Price } from './elements'

export function Form (props: FormDataContract) {
  return (
    <div>
      { props.elements.map(option => {
        switch (option.type) {
          case Elements.Meta.ElementType.Title:
            return <Title {...option.data}/>
          case Elements.Meta.ElementType.Price:
            return <Price {...option.data}/>
          default:
            return null
        }
      })}
    </div>
  )
}