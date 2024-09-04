"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";


export default function ImagePicker({label, name}) {
    const imageInputRef = useRef();

    const [pickedImage, setPickedImage] = useState();

    function handleImageChange(event){
         const file = event.target.files[0];

         if(!file){
            return;
         }
         const fileReader = new FileReader();
         fileReader.readAsDataURL(file);

         fileReader.onload = () => {
            setPickedImage(fileReader.result);
            console.log(fileReader.result);
         }

    }

    const handleOnclick = () => {
        imageInputRef.current.click();
    }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
      <div className={classes.preview}>
          {!pickedImage && <p>No image is picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Image selected by the user" fill/>}
      </div>
         <input type="file" id={name} accept="image/png,  image/jpeg" className={classes.input} name={name} ref={imageInputRef} onChange={handleImageChange}/>
         <button type="button" className={classes.button} onClick={handleOnclick}>Pick an Image</button>
      </div>
    </div>
  );
}
