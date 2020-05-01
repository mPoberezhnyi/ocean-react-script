import React, { Fragment } from 'react'
import { Price, RegularPrice, RegularPriceWithSale, SalePrice } from './styled'

const ProductPrice = ({price: { regular, sale }}) => {

	const price = sale ? <Fragment>
			<RegularPriceWithSale>{regular} UAH</RegularPriceWithSale>
			<SalePrice>{sale} UAH</SalePrice>
		</Fragment> : <RegularPrice>
			{regular} UAH
		</RegularPrice>

	return (<Price>
		{price}
	</Price>)
}

export default ProductPrice