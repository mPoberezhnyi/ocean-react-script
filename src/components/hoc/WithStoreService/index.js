import React from 'react'
import { StoreServiceConsumer } from '../../StoreServiceContext'

const WithStoreService = () => (Wrapped) => {
	return (props) => {
		return (
			<StoreServiceConsumer>
			{
				(storeService) => {
					return (
						<Wrapped {...props}
								 storeService={storeService} />
					)
				}
			}
			</StoreServiceConsumer>
		)
	}
}

export default WithStoreService