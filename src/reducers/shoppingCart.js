const updateCartItems = (cartItems, item, idx) => {
	if (item.count < 1) {
		return [
			...cartItems.slice(0, idx),
			...cartItems.slice(idx + 1)
		];
	}

	if (idx === -1) {
		return [
			...cartItems,
			item
		];
	}

	return [
		...cartItems.slice(0, idx),
		item,
		...cartItems.slice(idx + 1)
	];
};

const itemToCartFormat = (product, count) => {

	const price = product.price.sale || product.price.regular || 0

	return {
		id: product._id,
		title: product.name || product.title,
		count: count,
		price,
		total: price * count
	}
}

const updateCartItem = (product, count) => {

	const newCount = product.count + count

	return {
		...product,
		count: newCount,
		total: product.price * newCount
	}
}

const updateCart = (state, product, count) => {

	let newOrder = itemToCartFormat(product, count);

	const orderIndex = state.orderList.findIndex(item => item.id === newOrder.id)

	if (orderIndex !== -1) {
		const oldItem = state.orderList.find(({id}) => id === newOrder.id )
		newOrder = updateCartItem(oldItem, count)
	}

	return {
		orderList: updateCartItems(state.orderList, newOrder, orderIndex),
		cartTotal: newOrder.price * count + state.cartTotal,
		cartCount: state.cartCount + count
	}

}

const ShoppingCart = (state, action) => {
	if (state === undefined) {
		return {
			orderList: [],
			cartTotal: 0,
			cartCount: 0
		}
	}

	switch (action.type) {

		case 'ADDED_PRODUCT':
			return updateCart(state, action.payload, 1);

		case 'REMOVED_PRODUCT':
			return updateCart(state, action.payload, -1);

		case 'REMOVED_ALL_PRODUCTS':
			const item = state.orderList.find(({id}) => id === action.payload.id);
			return updateCart(state, action.payload, -item.count);

		default:
			return state;
	}
}

export default ShoppingCart