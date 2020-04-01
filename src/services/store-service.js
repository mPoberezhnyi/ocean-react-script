import axios from 'axios'
import {MAIN_DOMAIN} from "../constants/routes";

export default class StoreService {
	// categories = [
	// 	"trousers", "suits", "shirts", "footwear", "trainers suits", "sweaters", "outerwear"
	// ]
	//
	// products = [
	// 		{
	// 			name: "checkered trousers",
	// 			galery: [],
	// 			categories: ["trousers"],
	// 			price: {
	// 				regular: '699',
	// 				sale: '',
	// 				currency: '₴'
	// 			},
	// 			description: "",
	// 			availableSizes: ["s", "l", "xl"]
	// 		},
	// 		{
	// 			name: "shirt",
	// 			galery: [],
	// 			categories: ["shirts"],
	// 			price: {
	// 				regular: '400',
	// 				sale: '',
	// 				currency: '₴'
	// 			},
	// 			description: "",
	// 			availableSizes: ["l", "xl"]
	// 		},
	// 		{
	// 			name: "trousers",
	// 			galery: [],
	// 			categories: ["trousers"],
	// 			price: {
	// 				regular: '699',
	// 				sale: '499',
	// 				currency: '₴'
	// 			},
	// 			description: "",
	// 			availableSizes: ["s", "l", "xl"]
	// 		},
	// 		{
	// 			name: "boots",
	// 			galery: [],
	// 			categories: ["footwear"],
	// 			price: {
	// 				regular: '1599',
	// 				sale: '',
	// 				currency: '₴'
	// 			},
	// 			description: "",
	// 			availableSizes: ["40", "42", "43", "45"]
	// 		},
	// 		{
	// 			name: "sweater",
	// 			galery: [],
	// 			categories: ["sweaters"],
	// 			price: {
	// 				regular: '599',
	// 				sale: '',
	// 				currency: '₴'
	// 			},
	// 			description: "",
	// 			availableSizes: ["s", "xl"]
	// 		},
	// 		{
	// 			name: "coat",
	// 			galery: [],
	// 			categories: ["outerwear"],
	// 			price: {
	// 				regular: '1799',
	// 				sale: '',
	// 				currency: '₴'
	// 			},
	// 			description: "",
	// 			availableSizes: ["xs", "s", "l", "xl"]
	// 		}
	// 	]

	getCategories() {
		return axios.get(`${MAIN_DOMAIN}/categories`)
	}

	getProducts() {
		return axios.get(`${MAIN_DOMAIN}/products`)
	}

	getProduct(id) {
		return axios.get(`${MAIN_DOMAIN}/products/${id}`)
	}
}