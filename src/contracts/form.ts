import {
  TitleElementContract,
  PriceElementContract
} from './elements'

export type FormElement =
  PriceElementContract |
  TitleElementContract

export interface FormDataContract {
  elements: FormElement[]
}
