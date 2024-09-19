import { Elements } from '../contracts'
import { Title } from './Title'
import { Price } from './Price'

export const createElementRegistry = () => {
  return {
    [Elements.Meta.ElementType.Title]: Title,
    [Elements.Meta.ElementType.Price]: Price
  }
}