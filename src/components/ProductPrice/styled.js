import styled from 'styled-components'

export const Price = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 1rem
`

export const SalePrice = styled.b`
	font-size: 1.2rem;
	color: black
`

export const RegularPriceWithSale = styled.span`
	font-size: .8rem;
	color: gray;
	text-decoration: line-through;
	margin-right: .5rem
`

export const RegularPrice = styled.span`
	font-size: 1rem;
	color: black
`