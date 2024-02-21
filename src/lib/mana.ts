import { ChainId } from '@mtvproject/schemas'
import { Authorization, AuthorizationType } from '@mtvproject/dapps/dist/modules/authorization/types'
import { ContractName, getContract } from '@mtvproject/transactions'

export function buildManaAuthorization(address: string, chainId: ChainId, contractName: ContractName): Authorization {
  const manaContractAddress = getContract(ContractName.MtvToken, chainId).address
  const toAuthorizeContractAddress = getContract(contractName, chainId).address

  return {
    type: AuthorizationType.ALLOWANCE,
    address: address,
    contractName: ContractName.MtvToken,
    contractAddress: manaContractAddress,
    authorizedAddress: toAuthorizeContractAddress,
    chainId
  }
}
