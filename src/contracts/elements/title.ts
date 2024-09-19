import { BaseElementContract, ElementType } from './meta'

export interface TitleDataContract {
  readonly title: string
  readonly subTitle?: string
}

export interface TitleElementContract extends BaseElementContract<
  ElementType.Title,
  TitleDataContract
> {}