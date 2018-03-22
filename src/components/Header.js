import React, { Component } from 'react';

class Header extends Component {
	render(){
		return (
			<div className='header'>
				<div className='header__search'>
						<i className='fa fa-facebook-official'></i>
						<div className='header__search__searchBar'>
							<input type='text' placeholder='Buscar'></input>
							<i className='fa fa-search' aria-hidden='true'></i>
						</div>
				</div>
				<div className='header__options'>
					<img className='header__options__image' src='https://scontent.fmex11-1.fna.fbcdn.net/v/t1.0-1/p100x100/26904508_10156429668511323_5866309676974531495_n.png?oh=0860b50dc03a86826bc8c2b0d4af61c7&oe=5B28EA9A' />
					<ul className='header__options__menu'>
						<li><a href='#'>Guardian</a></li>
						<li><a href='#'>Inicio</a></li>
						<li><a href='#'>Buscar Amigos</a></li>
					</ul>
					<ul className='header__options__iconMenu'>
						<li><i className='fa fa-users'></i></li>
						<li><i className='fa fa-commenting'></i></li>
						<li><i className='fa fa-globe'></i></li>
					</ul>
					<ul className='header__options__settings'>
						<li><i className='fa fa-question-circle'></i></li>
						<li><i className='fa fa-caret-down'></i></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Header;