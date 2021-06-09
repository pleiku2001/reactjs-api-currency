import React from 'react'

const Coin = ({name,symbol,current_price,image,total_volume}) => {
    return (
        <div className='child'>
            <img src={image} alt={name} className="children image"/>
            <div className="children name">Name: {name}</div>
            <div className="children symbol">Symbol: {symbol}</div>
            <div className="children price">Price: ${current_price}</div>
            <div className="children volume">Volume: {total_volume}</div>
        </div>
    )
}

export default Coin
