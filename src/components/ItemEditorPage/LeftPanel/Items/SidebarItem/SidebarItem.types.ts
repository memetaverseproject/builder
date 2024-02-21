import { BodyShape } from '@mtvproject/schemas'
import { Item } from 'modules/item/types'

export type Props = {
  item: Item
  isVisible: boolean
  isSelected: boolean
  isPlayingEmote: boolean
  selectedCollectionId: string | null
  bodyShape: BodyShape
  onClick: (item: Item) => void
}
