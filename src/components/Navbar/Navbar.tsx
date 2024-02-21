import React from 'react'
import { Navbar as BaseNavbar } from '@mtvproject/dapps/dist/containers/'
import { NavbarPages } from '@mtvproject/ui/dist/components/Navbar/Navbar'
import { Props } from './Navbar.types'

import './Navbar.css'

const Navbar: React.FC<Props> = ({ hasPendingTransactions, ...props }: Props) => {
  return <BaseNavbar activePage={NavbarPages.BUILDER} {...props} hasActivity={hasPendingTransactions} />
}

export default React.memo(Navbar)
