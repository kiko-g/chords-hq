import React from 'react'

type Props = {
  children: any
}

function Layout({ children }: Props) {
  return (
    <div className="layout">
      {children}
    </div>
  )
}

export default Layout
