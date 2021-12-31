import React,{useCallback,useRef,} from  'react';
import Webcam from "react-webcam";
import { useDispatch } from 'react-redux'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';
import './WebcamCapture.css';
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
  };

  
  
  function WebcamCaputre() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot( );
        dispatch(setCameraImage(imageSrc));
        history.push("/preview");
     },[webcamRef],
    )

 
      return (
          <div className='webcamCaputre'>
               <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
           <RadioButtonUncheckedIcon
             className='webcamCapture__button'
            onClick={capture}
            fontSize="large"
           />  
           
          </div>
      );
  }
  
  export default WebcamCaputre;
  