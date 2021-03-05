import React, { useState } from 'react';
import './card.css';
import college_02 from '../frontend task/college_02.jpg';

export default function Card({ item }) {
	return (
		<div className='card-container'>
			{/* {console.log(item)} */}

			<div className='image-container'>
				<img src={college_02} alt='College picture' />
				<div className='tag first'>{item.tags[0]}</div>
				<div className='tag second'>{item.tags[1]}</div>

				<div className='rating'>
					<div className='tag third'>
						<b className='big'>{item.rating}</b>/5
					</div>
					<div className='tag fourth'>{item.rating_remarks}</div>
				</div>
				<div className='tag fifth'>#{item.ranking}</div>
				<div className='alpha'>PROMOTED</div>
			</div>

			<div className='card-content'>
				<div className='card-body'>
					<div className='left'>
						<div className='card-title'>
							<h4>
								{item.college_name}{' '}
								<span class='fa fa-star checked'></span>
								<span class='fa fa-star checked'></span>
								<span class='fa fa-star checked'></span>
								<span class='fa fa-star checked'></span>
								<span
									class='fa fa-star checked'
									style={{ color: 'grey' }}
								></span>
							</h4>
						</div>
						<p style={{ padding: '1.5px', color: 'grey' }}>
							{item.nearest_place[0]}
							<b style={{ color: 'black' }}>|</b>{' '}
							{item.nearest_place[1]}
						</p>
						<p style={{ padding: '1.5px' }}>
							<span>93% Match: </span>
							<b style={{ color: 'grey', fontSize: '12px' }}>
								{item.famous_nearest_places}
							</b>
						</p>
						<p className='offertext'>{item.offertext}</p>
					</div>
					<div className='right'>
						<p className='original_fees'>
							<strike>${item.original_fees}</strike>{' '}
							<i
								class='fa fa-tag fa-3x tt'
								style={{ color: 'red' }}
							></i>{' '}
							<b className='text'>{item.discount}</b>
						</p>
						<p className='discounted_fees'>
							${item.discounted_fees}
						</p>
						<p className='fees_cycle'>{item.fees_cycle}</p>
						<div className='amenties'>
							<p className='amone'>
								<b>*{item.amenties[0]}</b>
							</p>
							<p className='amtwo'>
								<b>*{item.amenties[1]}</b>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
