import React from 'react';
// import ImageItem from './ImageItem'

const ImageList = () => {
    function importAll(r) {
        let images = [];
        r
            .keys()
            .forEach((item) => {

                // images[item.replace('./', '')] = r(item);
            images.push(`../images/${item.replace('./', '')}`)
                    
            });
        return images;
    }

    const images = importAll(require.context('../images', false, /\.(png|jpg|svg)$/));
    console.log(images);
    // const imageItems = images.map((image) => {     return <img alt="newimg"
    // image={images}/> })
    return (
        <div className="row">
            <div className="col-sm-3">
                <img
                    className="img-fluid"
                    alt="Responsive-image"
                    src={images[4]}/>
            </div>
        </div>
    )
}

export default ImageList;