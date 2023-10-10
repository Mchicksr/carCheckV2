import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storage } from '../../firebase/fbConfig';
import { getDownloadURL, ref, uploadBytes, listAll } from 'firebase/storage';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getProfile, saveImageID } from '../../actions/vProfileAct';


function SaveImage({ lp, activateBtn, hideView }) {
    const [imageUpload, setImageUpload] = useState(null)
    const [shouldRunUploadImage, setShouldRunUploadImage] = useState(false)
    const carProfile = useSelector(state => state.vProfile)
    const dispatch = useDispatch()
    const db = getFirestore()
    const colRef = collection(db, 'relatedCars')

    useEffect(() => {
        const fetchProfiles = async () => {
            getDocs(colRef)
                .then((snapshot) => {
                    let profile = []
                    snapshot.docs.forEach((doc) => {
                        profile.push({ ...doc.data(), id: doc.id })
                    })
                    dispatch(getProfile(profile))
                    profile.map(prof => {
                        if (prof.license_plate === lp) {
                                dispatch(saveImageID(prof.id))
                            }
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }


        fetchProfiles();
        
        if (shouldRunUploadImage) {
          fetchProfiles();
        }
        if (activateBtn) {
          uploadImage();
        }


    }, [shouldRunUploadImage, activateBtn])

    ////////////////////////////
    const uploadImage = (e) => {
        if (!hideView) {
            e.preventDefault()
        } else {
            return null;
        }

        if (imageUpload == null) return;

        const imageRef = ref(storage, `images/${imageUpload.name}`)

        uploadBytes(imageRef, imageUpload)
            .then(() => {
                alert("Image Uplaod")

                getDownloadURL(imageRef)
                    .then((downloadURL) => {
                        setShouldRunUploadImage(true)

                        console.log('dUrl', downloadURL);
                        addDoc(colRef, {
                            license_plate: lp,
                            image: downloadURL,
                        })

                    })
                    .catch((error) => {
                        console.log("Error getting download URL:", error);
                    })

            })
            .catch((error) => {
                console.log("Error uploading image:", error);
            })
    }


    const displayImage = () => {
        const data = carProfile.filter(car => {

            if (car.license_plate === lp) {

                return car
            }
            return null
        }).map((car, index) => {
            return <div key={index}>
                <img src={car.image} alt="df" />
            </div>
        })
        return data
    }

    return (
        <div>
            <form action="" onSubmit={uploadImage}>
                <input type="file" name="" id="" onChange={(e) => { setImageUpload(e.target.files[0]) }} /> <br />
                <button className={`btn btn-primary ${hideView ? 'hide' : null}`} type="submit">Submit</button>
            </form>

            {hideView ? null : displayImage()}

        </div>
    );
}

export default SaveImage;