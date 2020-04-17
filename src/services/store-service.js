import axios from 'axios'
import {MAIN_DOMAIN} from "../constants/routes";

export default class StoreService {

	getCategories() {
		return axios.get(`${MAIN_DOMAIN}/categories`)
	}

	getProducts() {
		return axios.get(`${MAIN_DOMAIN}/products`)
	}

	getProduct(id) {
		return axios.get(`${MAIN_DOMAIN}/products/${id}`)
	}

	register(form) {
		console.log('form: ', form)
		return axios.post(`${MAIN_DOMAIN}/auth/register`, form)
	}

	login(form) {
		console.log('service: ', form)
		return axios.post(`${MAIN_DOMAIN}/auth/login`, form)
	}
}