import { BaseElementContract, ElementType } from './meta'

export interface PriceDataContract {
  readonly price: number
  readonly salePrice?: number
}

export interface PriceElementContract extends BaseElementContract<
  ElementType.Price,
  PriceDataContract
> {}