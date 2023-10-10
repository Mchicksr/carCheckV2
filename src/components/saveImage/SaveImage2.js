import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storage } from '../../firebase/fbConfig';
import { getDownloadURL, ref, uploadBytes, listAll } from 'firebase/storage';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getProfile, saveImageID, createCarImage } from '../../actions/vProfileAct';
import { showImage } from '../../actions/cars';


function SaveImage2({ lp, activateBtn, hideView,carImages }) {
    const [imageUpload, setImageUpload] = useState(null)
    const [shouldRunUploadImage, setShouldRunUploadImage] = useState(false)
    const [imageSelected, setImageSelected] = useState([])
    const carProfile = useSelector(state => state.vProfile)
    const dispatch = useDispatch()
    const db = getFirestore()
    const colRef = collection(db, 'relatedCars')
    
    // console.log('activateBtn',activateBtn)
    useEffect(() => {

        // if (shouldRunUploadImage) {
        //     dispatch(showImage())
        // }
        console.log('activateBtn',activateBtn)
        if (activateBtn) {
            console.log('click')
            uploadImage();
        }


    }, [shouldRunUploadImage, activateBtn])
    ////////////////////////////
     const collectImages = (e) =>{
        const files  = Array.from(e.target.files)
        setImageSelected(files)
     }
     console.log('imageSelected',imageSelected)
    const uploadImage = (e) => {
        if (!hideView) {
            e.preventDefault()
        } else {
            return null;
        }
        // e.preventDefault()
        console.log('click2')
//
imageSelected.forEach((imageUpload)=>{
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`)

    uploadBytes(imageRef, imageUpload)
        .then(() => {
            alert("Image Uplaod")

            getDownloadURL(imageRef)
                .then((downloadURL) => {
                    setShouldRunUploadImage(true)

                    console.log('dUrl', downloadURL);
                    dispatch(createCarImage(lp, {car_image:downloadURL}))
                    dispatch(showImage({car_image:downloadURL}))


                })
                .catch((error) => {
                    console.log("Error getting download URL:", error);
                })

        })
        .catch((error) => {
            console.log("Error uploading image:", error);
        })
})
        // if (imageUpload == null) return;

        // const imageRef = ref(storage, `images/${imageUpload.name}`)

        // uploadBytes(imageRef, imageUpload)
        //     .then(() => {
        //         alert("Image Uplaod")

        //         getDownloadURL(imageRef)
        //             .then((downloadURL) => {
        //                 setShouldRunUploadImage(true)

        //                 console.log('dUrl', downloadURL);
        //                 dispatch(createCarImage(lp, {car_image:downloadURL}))
        //                 dispatch(showImage({car_image:downloadURL}))


        //             })
        //             .catch((error) => {
        //                 console.log("Error getting download URL:", error);
        //             })

        //     })
        //     .catch((error) => {
        //         console.log("Error uploading image:", error);
        //     })
//
    }

    const displayImage = () => {
        const data = carImages.map((car, index) => {
            return <div key={index}>
                <img className="image-size" src={car} alt="df" />
            </div>
        })
        return data
    }
// console.log('imageUpload',imageUpload)
    return (
        <div>
            <form action="" onSubmit={uploadImage}>
                {/* <input type="file" name="" id="" onChange={(e) => { setImageUpload(e.target.files[0]) }} /> <br /> */}
                <input type="file" name="" id="" onChange={collectImages} multiple/> <br />
                <button className={`btn btn-primary ${hideView ? 'hide' : null}`} type="submit">Submit</button>
            </form>

            {hideView ? null : displayImage()}
            {/* <button onClick={()=>dispatch(showImage({car_image:'downloadURL'}))}>Clickety</button> */}
        </div>
    );
}

export default SaveImage2;