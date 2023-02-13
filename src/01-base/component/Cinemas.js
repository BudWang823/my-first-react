import React, {Component} from 'react';
import axios from "axios";

class Cinemas extends Component {
	state = {
		allCinemas: [],
		cinemas: [],
	}
	componentDidMount() {
		axios({
			methods: "get",
			url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9102410",
			headers: {
				"X-Host": "mall.film-ticket.cinema.list",
				"X-Requested-With": "XMLHttpRequest"
			}
		}).then(({data}) => {
			this.setState({
				allCinemas: data.data.cinemas,
				cinemas: data.data.cinemas
			})
			setTimeout(() => {
			},1)

		})
	}
	searchCinemas = (event) => {
		const {allCinemas} = this.state
		const text = event.target.value.toUpperCase()
		const cinemasList = allCinemas.filter(item => {
			return item.name.toUpperCase().includes(text) || item.address.toUpperCase().includes(text)
		})
		this.setState({
			cinemas:cinemasList
		})


	}
	render() {
		const {cinemas} = this.state
		return (
			<div className="Cinemas">
				<div className="search"><input type="text" onInput={this.searchCinemas}/></div>
				<div className="cinemas">
					{cinemas.map(item => {
						return(
							<div className="cinemas-item" key={item.cinemaId}>
								<div className="storeName">{item.name}</div>
								<div className="storeAddress">{item.address}</div>
							</div>
						)
					})}

				</div>
			</div>

		);
	}
}

export default Cinemas;
