import * as React from 'react'
import { Form, Field, Button, InputOnChangeData } from '@mtvproject/ui'
import { t } from '@mtvproject/dapps/dist/modules/translation/utils'

import { isValid } from 'lib/address'
import { Props, State } from './EmptyRole.types'
import './EmptyRole.css'

export default class EmptyRole extends React.PureComponent<Props, State> {
  state: State = {
    address: ''
  }

  handleAdd = () => {
    const { onAdd } = this.props
    const { address } = this.state
    onAdd(address)
  }

  handleCancel = () => {
    const { onCancel } = this.props
    onCancel()
  }

  handleChange = (_: React.ChangeEvent<HTMLInputElement>, { value }: InputOnChangeData) => {
    this.setState({
      address: value
    })
  }

  render() {
    const { isEnsAddressEnabled } = this.props
    const { address } = this.state
    return (
      <Form className="EmptyRole" onSubmit={this.handleAdd}>
        {isEnsAddressEnabled ? (
          <></>
        ) : (
          <Field
            className="rounded"
            type="address"
            value={address}
            onChange={this.handleChange}
            placeholder="0x..."
            error={!!address && !isValid(address)}
          />
        )}
        <Button basic className="action link">
          {t('global.add')}
        </Button>
        <span className="action link" onClick={this.handleCancel}>
          {t('global.cancel')}
        </span>
      </Form>
    )
  }
}
