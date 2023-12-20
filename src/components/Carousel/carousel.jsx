import { useState} from 'react'
import chevronRight from '../../assets/chevronRight.png'
import chevronLeft from '../../assets/chevronLeft.png'
import './carousel.css'

// This is a custom hook that fetches data from an API

export default function Carousel ({img}){
  
    const numberPicture = img.length
    const firstPicture = img[0]
    const lastPicture = img[numberPicture-1]
    const [pictureActual, setPictureActual ] = useState(firstPicture)
    const pictureIndex = img.indexOf(pictureActual)
    

    const previous = () => {
        if(pictureActual === firstPicture){
            setPictureActual(lastPicture)
        } else {
            
            setPictureActual(img[pictureIndex-1])
        }
    }
    const next = () => {
        if(pictureActual === lastPicture){
            setPictureActual(firstPicture)
        } else {
            
            setPictureActual(img[pictureIndex+1])
        }
    }

    return (
        <div className="carousel">
            <div className="carousel_container" >
            <img src={pictureActual}  alt={pictureActual.title} className="carousel_img" />
            </div>
            {numberPicture !== 1 &&
            <div className='carousel_controls'>
                <img src={chevronLeft} className='chevronLeft' alt="previous" onClick={() => previous(pictureActual)} />
                <img src={chevronRight} className='chevronRight' alt="next" onClick={() => next(pictureActual)}/>
                <div className='carousel_Index'>{img.indexOf(pictureActual)+1} / {numberPicture}</div>

            </div>}
        </div>
    );}


    


