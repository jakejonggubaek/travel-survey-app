import {useState, useEffect} from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import answerSource from "./answerSource.js";

function Done(props) {
    const [photos, setPhotos] = useState([]);
    const [answers] = useState(props.answerNumbers);
    const [destination] = useState(answerSource[answers[0] - 1][answers[1] - 1][answers[5] - 1]);

    useEffect(()=>{

        axios({
            url: 'https://api.unsplash.com/search/photos',
            method: 'GET',
            dataResponse: 'json',
            params: {
                client_id: 'rTycribGxdHoePCruIkuKy6KXuvTevUztqfXQnS7MOE',
                query: destination,
                per_page: 30
            }
        }).then((response) => {

            const photoArray = response.data.results

            const properPhotoArray = photoArray.filter((obj) => {
                const photoRatio = obj.width / obj.height;
                return photoRatio > 1.2
            });

            setPhotos(properPhotoArray);

        })
    // eslint-disable-next-line
    }, []);

    const scrollLeft = () => {
        const imageContainer = document.getElementsByClassName('image-container');
        const arrowLeft = document.getElementsByClassName('arrow-left');
        const arrowRight = document.getElementsByClassName('arrow-right');
        const imageContainerWidth = (photos.length - 1) * 400;

        imageContainer[0].scrollLeft -= 400;

        if (imageContainer[0].scrollLeft < 1) {
            arrowLeft[0].style.visibility = "hidden";
        }

        if (imageContainer[0].scrollLeft < imageContainerWidth-1) {
            arrowRight[0].style.visibility = "visible";
        }
    }

    const scrollRight = () => {
        const imageContainer = document.getElementsByClassName('image-container');
        const arrowLeft = document.getElementsByClassName('arrow-left');
        const arrowRight = document.getElementsByClassName('arrow-right');
        const imageContainerWidth = (photos.length - 1) * 400;

        imageContainer[0].scrollLeft += 400;

        if (imageContainer[0].scrollLeft > 1) {
            arrowLeft[0].style.visibility = "visible";
        }

        if (imageContainer[0].scrollLeft > imageContainerWidth-1) {
            arrowRight[0].style.visibility = "hidden";
        }
    }

    return (
        <div className='done-page'>
            <p>{destination}</p>
            <div className='contents-container'>
                <IconContext.Provider value={{ className: "arrow-left" }}>
                    <div>
                        <BsFillCaretLeftFill onClick={scrollLeft} />
                    </div>
                </IconContext.Provider>
                <div className='image-container'>
                    {
                        photos.map((obj, index) => {
                            return (
                                <img key={index} src={obj.urls.small} alt={obj.alt_description} />
                            )
                        })
                    }
                </div>
                <IconContext.Provider value={{ className: "arrow-right" }}>
                    <div>
                        <BsFillCaretRightFill onClick={scrollRight} />
                    </div>
                </IconContext.Provider>
            </div>
            <button onClick={()=>window.location.reload(false)}>Go to Homepage</button>
        </div>
    )
}

export default Done;