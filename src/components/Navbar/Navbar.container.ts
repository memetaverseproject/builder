import { connect } from 'react-redux'
import { isPending } from '@mtvproject/dapps/dist/modules/transaction/utils'
import { getAddress } from '@mtvproject/dapps/dist/modules/wallet/selectors'
import { isLoggedIn } from 'modules/identity/selectors'
import { RootState } from 'modules/common/types'
import { getTransactions } from 'modules/transaction/selectors'
import { MapStateProps, MapDispatchProps, OwnProps } from './Navbar.types'
import Navbar from './Navbar'

const mapState = (state: RootState): MapStateProps => ({
  hasPendingTransactions: getTransactions(state).some(tx => isPending(tx.status)),
  address: getAddress(state),
  isSignedIn: isLoggedIn(state)
})

const mergeProps = (mapStateProps: MapStateProps, mapDispatchProps: MapDispatchProps, ownProps: OwnProps) => ({
  ...mapStateProps,
  ...mapDispatchProps,
  ...ownProps
})

export default connect(mapState, {}, mergeProps)(Navbar)