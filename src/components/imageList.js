import React from 'react';
// import ImageItem from './ImageItem'

const ImageList = () => {
    function importAll(r) {
        let images = {};
        r
            .keys()
            .forEach((item) => {
                images[item.replace('./', '')] = r(item);
            });
        return images;
    }
    const images = importAll(require.context('../images', false, /\.(png|jpg|svg)$/));
    console.log(images.length);
    // const imageItems = images.map((image) => {
    //     return <img alt="newimg" image={images}/>
    // })
    return (

        <div className="col-3">
            <img alt="somthing" src={images['crazyeyes.jpg']}/>
        </div>

    )

}

export default ImageList;