import * as React from 'react'
import { t } from '@mtvproject/dapps/dist/modules/translation/utils'
import { Popup } from '@mtvproject/ui'
import { Profile as BaseProfile } from '@mtvproject/dapps/dist/containers'
import { isEqual } from 'lib/address'
import { LAND_POOL_ADDRESS } from 'modules/land/utils'
import { Props } from './Profile.types'

export default class Profile extends React.PureComponent<Props> {
  render() {
    const { currentAddress = '', ...newProps } = this.props

    if (isEqual(newProps.address, LAND_POOL_ADDRESS)) {
      newProps.isMemetaverse = true
    }

    return (
      <Popup
        disabled={!isEqual(newProps.address, currentAddress)}
        content={t('popups.its_you')}
        position="top center"
        trigger={
          <span>
            <BaseProfile {...newProps} />
          </span>
        }
        on="hover"
        inverted
      />
    )
  }
}
