import { useMemo } from 'react'
import { FormDataContract, Elements } from './contracts'

import { createElementRegistry } from './elements'

export function Form (props: FormDataContract) {
  const registry = useMemo(() => createElementRegistry(), [])

  return (
    <div>
      { props.elements.map(option => {
        switch (option.type) {
          case Elements.Meta.ElementType.Title:
            const Title = registry[option.type]
            return <Title {...option.data}/>
          case Elements.Meta.ElementType.Price:
            const Price = registry[option.type]
            return <Price {...option.data}/>
          default:
            return null
        }
      })}
    </div>
  )
}