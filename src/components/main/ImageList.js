import React from 'react'
import Image from './Image'

const ImageList = props => {
    const images = [
        { url: "http://jonmaldia.com/artbytra/art-01.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-03.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-06.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-07.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-08.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-10.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-11.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-12.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-13.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-14.jpg" },
        { url: "http://i58.photobucket.com/albums/g258/artbytra/art-15_zpssnzjbtzf.jpg" },
        // { url: "http://jonmaldia.com/artbytra/art-04.jpg" },
        // { url: "http://jonmaldia.com/artbytra/art-05.jpg" },
        // { url: "http://jonmaldia.com/artbytra/art-09.jpg" },
        // { url: "http://jonmaldia.com/artbytra/art-15.jpg" }
        // { url: "http://jonmaldia.com/artbytra/art-16.jpg" }
        // { url: "http://jonmaldia.com/artbytra/art-02.jpg" },
    ]

    return (
        <div className="image-list">
            {
                images.map((image, index) => {
                    return (
                        <Image key={index} image={image}/>
                    )
                })
            }
        </div>
    )
}

export default ImageList