import React from 'react'

const Page = ({children}: React.PropsWithChildren) => {
  return (
    <div className="pt-5 pb-5">{children}</div>
  )
}

export default Page