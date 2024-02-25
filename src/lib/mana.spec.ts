import { ChainId } from '@mtvproject/schemas'
import { ContractName } from '@mtvproject/transactions'
import { buildManaAuthorization } from './mana'

describe('when building the MANA authorization', () => {
  describe("and the MANA contract doesn't exist for the given chain id", () => {
    it('should throw', () => {
      expect(() => buildManaAuthorization('0x0', ChainId.ETHEREUM_RINKEBY, ContractName.CollectionFactory)).toThrowError(
        'Could not get a valid contract for MANAToken using chain 4'
      )
    })
  })

  describe("and the given contract name doesn't exist for the given chain id", () => {
    it('should throw', () => {
      expect(() => buildManaAuthorization('0x0', ChainId.ETHEREUM_GOERLI, ContractName.Forwarder)).toThrowError(
        'Could not get a valid contract for Forwarder using chain 5'
      )
    })
  })
})
