import { Coord } from '@mtvproject/ui'
import { Transaction } from '@mtvproject/dapps/dist/modules/transaction/types'
import { Item } from 'modules/item/types'

export type Props = {
  selection?: Coord[]
  address?: string
  collectionId?: string
  item?: Item
  subdomain?: string
  slotsToyBuy?: number
  text: React.ReactNode
  tx: Transaction
}
