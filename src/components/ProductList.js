import React, { Fragment } from 'react'
import Product from './Product'

function statusForWishlist(product, productsInWishlist) {
  const hasWishlist = !!productsInWishlist
  if (!hasWishlist) {
    return { showAdd: false, showRemove: false }
  }

  const inWishlist = productsInWishlist.some(productInWishlist => {
    return productInWishlist._id === product._id
  })

  return { showAdd: !inWishlist, showRemove: inWishlist }
}

function ProductList({
  products,
  productsInWishlist,
  editedProductID,
  onEditProduct,
  onAddProductToWishlist,
  onRemoveProductFromWishlist,
  renderEditForm
}) {
  const hasWishlist = !!productsInWishlist

  return (
    <div className="mb-3">
      <h2>Products</h2>

      {products.map(product => {
        const inWishlist =
          hasWishlist &&
          productsInWishlist.some(wishlistProduct => {
            return wishlistProduct._id === product._id
          })
        const showAddToWishlist = hasWishlist && !inWishlist
        const showRemoveFromWishlist = hasWishlist && inWishlist

        return (
          <Fragment key={product._id}>
            <Product
              {...product}
              onEdit={() => {
                onEditProduct(product._id)
              }}
              onAddToWishlist={
                showAddToWishlist
                  ? () => {
                      onAddProductToWishlist(product._id)
                    }
                  : null
              }
              onRemoveFromWishlist={
                showRemoveFromWishlist
                  ? () => {
                      onRemoveProductFromWishlist(product._id)
                    }
                  : null
              }
            />
            {editedProductID === product._id && renderEditForm(product)}
          </Fragment>
        )
      })}
    </div>
  )
}

export default ProductList
