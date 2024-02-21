import { Network } from '@mtvproject/schemas'
import { createSelector } from 'reselect'
import { getData, getNetworks } from '@mtvproject/dapps/dist/modules/wallet/selectors'
import { Wallet } from '@mtvproject/dapps/dist/modules/wallet/types'
import { RootState } from 'modules/common/types'

export function getManaBalanceForNetwork(state: RootState, network: Network): number {
  const networks = getNetworks(state)
  return networks && networks[network] && networks[network].mana ? networks[network].mana : 0
}

export const getWallet = createSelector<RootState, Wallet | null, Wallet | null>(getData, wallet =>
  wallet ? { ...wallet, address: wallet.address.toLowerCase() } : null
)
