import React, { Component } from 'react';

class WritePost extends Component {
	render(){
		return (
			<div className='post__container'>
				<div className='banner'>
					<ul className='banner__select'>
						<li><a href='#'><i className='fa fa-pencil'></i>  Publicaci&oacute;n</a></li>
						<li><a href='#'><i className='fa fa-book'></i>  Album de fotos/videos</a></li>
						<li><a href='#'><i className='fa fa-video-camera'></i>  Video en vivo</a></li>
					</ul>
				</div>
				<div className='writePost'>
					<div className='writePost__post'>
						<img className='writePost__post__image' src='https://scontent.fmex11-1.fna.fbcdn.net/v/t1.0-1/p100x100/26904508_10156429668511323_5866309676974531495_n.png?oh=0860b50dc03a86826bc8c2b0d4af61c7&oe=5B28EA9A'/>					
						<input className='writePost__post__input' type='text' placeholder='&iquest;Qu&eacute; est&aacute;s pensando, Guardian?'></input>
					</div> 
					<div className='writePost__footer'>
						<ul className='writePost__footer__list'>
							<li><a href='#'><i className='fa fa-picture-o'></i>  Foto/Video</a></li>
							<li><a href='#'><i className='fa fa-smile-o'></i>  Sentimiento/Actividad</a></li>
							<li><a href='#'><i className='fa fa-ellipsis-h'></i>  </a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default WritePost;