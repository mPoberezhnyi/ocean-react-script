import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-col">
					<h4 className="footer-col-title">Category</h4>
					<ul className="footer-col-list">
						<li className="footer-col-item"><Link>Shirts</Link></li>
						<li className="footer-col-item"><Link>Outerwear</Link></li>
					</ul>
				</div>


				<div className="footer-col">
					<h4 className="footer-col-title">Company</h4>
					<ul className="footer-col-list">
						<li className="footer-col-item"><Link to="/about">About</Link></li>
						<li className="footer-col-item"><Link to="/news">News</Link></li>
						<li className="footer-col-item"><Link to="/faq">FAQ</Link></li>
						<li className="footer-col-item"><Link to="/contacts">Contact</Link></li>
					</ul>
				</div>

				<div className="footer-col">
					<h4 className="footer-col-title">Address</h4>
					<ul className="footer-col-list">
						<li className="footer-col-item"><Link>200, Green block, NewYork</Link></li>
						<li className="footer-col-item"><Link>+10 456 267 1678</Link></li>
						<li className="footer-col-item footer-col-item--email">
							<Link>Contact89@Winter.Com</Link>
						</li>
					</ul>
				</div>

				<div className="footer-col">
					<h4 className="footer-col-title">Newsletter</h4>
					<div className="footer-subscribe">
						subscribe block...
					</div>
					<ul className="footer-socials">
						<li className="footer-socials-item"></li>
						<li className="footer-socials-item"></li>
						<li className="footer-socials-item"></li>
					</ul>
				</div>

			</div>
		</footer>
	)
}

export default Footer