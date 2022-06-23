/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import { Image, Transformation } from "cloudinary-react";


export default function Home() {
  const uploadImage = async () => {
    const image = document.getElementById("image");
    try {
      fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: image.src }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Image upload complete");
          console.log(data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.imageRow}>
        <div className=''>
          <img
            alt="CloudinaryImage"
            src="https://res.cloudinary.com/iamdeelesiemmanuel/image/upload/v1655992810/ManImage_nzf4or.jpg"
            height={450}
          />
        </div>
        <div className={styles.column}>
          <Image
            id="image"
            className={styles.cloudImage}
            secure={true}
            cloudName="iamdeelesiemmanuel"
            publicId="ManImage_nzf4or"
          >
            <Transformation
              width="250"
              height="250"
              gravity="face"
              crop="thumb"
            />
          </Image>
          <br />
          <button className={styles.btn} onClick={uploadImage}>
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
  
}
