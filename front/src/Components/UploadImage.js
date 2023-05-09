
export default function UploadImage(props) {
    const cloudName = "hzxyensd5"; // replace with your own cloud name
    const uploadPreset = "aoh4fpwm"; 
    var myWidget=null
   /*  useEffect=(()=>{ */
         myWidget = window.cloudinary.createUploadWidget(
            {
              cloudName: cloudName,
              uploadPreset: uploadPreset
              
            },
            (error, result) => {
              if (!error && result && result.event === "success") {
               
              props.setProductData({...props.productData,image:result.info.url})
              
               
              }
            }/*  */
          );
       
 /*    }) */
  return (
    <div className="App">
      <h3> Upload Image </h3>
   {myWidget&&<button  id="upload_widget" onClick={myWidget.open} className="cloudinary-button">Upload
      </button>}   
        
    
      <img id="uploadedimage" src="" alt=""></img>
    </div>
  );
}
