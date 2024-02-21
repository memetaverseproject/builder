import { RouteProps } from 'react-router-dom'
import { Wallet } from '@mtvproject/dapps/dist/modules/wallet/types'

export type Props = RouteProps & {
  isConnecting: boolean
  wallet: Wallet | null
}

export type MapStateProps = Pick<Props, 'wallet' | 'isConnecting'>
