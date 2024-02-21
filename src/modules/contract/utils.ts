import { ContractName, getContractName } from '@mtvproject/transactions'

export function getContractSymbol(address: string) {
  const contractName = getContractName(address)
  const symbols: Partial<Record<ContractName, string>> = {
    [ContractName.MtvToken]: 'MTV'
  }

  const symbol = symbols[contractName]
  if (!symbol) {
    throw new Error(`Could not find a valid symbol for contract ${contractName} using address ${address}`)
  }
  return symbol
}
