import React from 'react'
import Image from './Image'

const ImageList = props => {
    const images = [
        { url: "http://jonmaldia.com/artbytra/art-01.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-02.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-03.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-04.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-05.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-06.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-01.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-02.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-03.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-04.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-05.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-06.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-01.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-02.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-03.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-04.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-05.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-06.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-01.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-02.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-03.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-04.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-05.jpg" },
        { url: "http://jonmaldia.com/artbytra/art-06.jpg" }
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