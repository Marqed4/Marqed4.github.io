import { useEffect } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.jsx"
import "./Gallery.css";

import GalleryInactive from "../resources/art/gallery page graphics/Gallery Inactive.gif"
import GalleryActive from "../resources/art/gallery page graphics/Gallery Active.gif"

import { PetGallery }  from "../resources/art/gallery page graphics/index.js";

const PetsArray = [
    { id: "IMG_0510", image: PetGallery.IMG_0510, description: "Why is Maggie such a sassy gal!?"}, 
    { id: "IMG_0529", image: PetGallery.IMG_0528, description: "Like... two peas in a pod.\nMaggie & Lisa!"}, 
    { id: "IMG_1309", image: PetGallery.IMG_1309, description: "Debugging Cat!" },
    { id: "IMG_0987", image: PetGallery.IMG_0987, description: "Diva 💅" },
    { id: "IMG_1844", image: PetGallery.IMG_1844, description: "Little Baby Heather" },
    { id: "IMG_1336", image: PetGallery.IMG_1336, description: "Great Company" },
    { id: "IMG_1213", image: PetGallery.IMG_1213, description: "off-guard flick" },
    { id: "IMG_1222", image: PetGallery.IMG_1222, description: "You mirin' brah? 😺" },
];

// Each photo will contain it's own data (picture and description).
const Gallery = () => {
      useEffect(() => {
        document.title = "Marqed's Gallery";
      }, []);
    return (
        <>
            <Navbar />
            <div className="gallery-page">
                <img src={GalleryInactive}
                className="gallery-header"
                alt="Gallery"
                />
                <div className="gallery-grid">
                    {PetsArray.map((media) => (
                        <a
                        key={media.id}
                        className="gallery-card"
                        >
                            <div className="gallery-image-wrapper">
                                <img
                                src={media.image} 
                                className={`${media.id.toLowerCase()} gallery-image`}
                                />
                                <h2 className="gallery-name">{media.title}</h2>
                                <p className={`${media.id.toLowerCase()} gallery-description`}>
                                    {media.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Gallery;
export { GalleryInactive, GalleryActive };