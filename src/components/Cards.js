import React from "react";

function Cards({item,handleClick}) {
  const { id, title, author, price, img } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>{price} TL</p>
        <button onClick={() => handleClick(item)}>Add to Card</button>
      </div>
    </div>
  );
}

export default Cards;
