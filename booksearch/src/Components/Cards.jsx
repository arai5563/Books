import React from 'react'

const Cards = ({book}) => {

 
  return (
    <>
    
    <div>
      {
          book.map((item)=>{

            let thumbnail = item.columeInfo.imagelinks && item.volumeInfo.imageLinks.smallThumbnail;
            
            let price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

            if(thumbnail!= undefined && price != undefined){
                return(

                    <div>
                        <div>
                            <img src={thumbnail} alt="" />
                        </div>
                        <div>
                            <h3>{item.volumeInfo.title}</h3>
                            <p>{price}</p>
                        </div>
                    </div>
                  )
            }
            
          })
      }
    </div>
    
    </>
  )
}

export default Cards
