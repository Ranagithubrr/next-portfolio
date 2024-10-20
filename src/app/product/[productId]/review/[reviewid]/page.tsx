import React from 'react'

const index = ({params}:{
  params: { productId: string, reviewid: string }
}) => {
  return (
    <div>product id is {params.productId} / review id is {params.reviewid}</div>
  )
}

export default index