import React, { Component } from 'react';

class Post extends Component {
	render(){
		return (
			<div className='post'>
				<header className='post__header'>
					<div>
						<img className='post__image' src='https://scontent.fmex11-1.fna.fbcdn.net/v/t1.0-1/p100x100/26904508_10156429668511323_5866309676974531495_n.png?oh=0860b50dc03a86826bc8c2b0d4af61c7&oe=5B28EA9A'/>
					</div>
					<div>
						<h3 className='post__title'>The Guardian</h3>
		 				<p><time>1 hr</time> · <i className="fa fa-globe"></i></p>
					</div>
				</header>
				<div className='post__contents'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur mattis sem, quis accumsan turpis faucibus sit amet. Nulla efficitur sit amet libero condimentum scelerisque. Duis luctus massa lacinia purus cursus, non placerat metus sagittis. Morbi lobortis facilisis eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec maximus auctor lorem, sed malesuada ante sagittis in. Maecenas sodales ipsum sit amet neque iaculis tincidunt. Sed aliquet congue nibh, non molestie risus semper a. Nulla commodo fermentum malesuada. Cras eu mi dictum, sodales eros id, posuere quam. Morbi semper faucibus est maximus lobortis. Suspendisse volutpat est id luctus aliquam. Quisque at dui semper augue faucibus dictum. Nunc accumsan felis eget aliquet gravida. Integer facilisis neque justo, in mattis sapien rutrum vel. Sed scelerisque ex sit amet lectus suscipit, vel gravida urna malesuada. </p>
				</div>
				<footer className='post__footer'>
					<ul className='post__actions'>
						<li><a href='#'><i className='fa fa-thumbs-o-up'></i>  Me Gusta</a></li>
						<li><a href='#'><i className='fa fa-comment-o'></i>  Comentar</a></li>
						<li><a href='#'><i className='fa fa-share'></i>  Compartir</a></li>
					</ul>
				</footer>
			</div>
		)
	}
}

export default Post;