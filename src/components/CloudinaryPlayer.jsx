
import { useEffect, useRef } from 'react';
import cloudinary from 'cloudinary-video-player';
import "cloudinary-video-player/cld-video-player.min.css";
import { CLOUD_NAME } from '../constants/videoSourceContansts';

const CloudinaryPlayer = ({ id, publicId, playerConfig, sourceConfig, ...props }) => {
  
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    
    if (cloudinaryRef.current) return;
    
    cloudinaryRef.current = cloudinary;

    let player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      cloud_name: CLOUD_NAME,
      secure: true,
      controls: true,
      ...playerConfig,
    });

    player.source(publicId, sourceConfig);

  }, [publicId, playerConfig, sourceConfig]);

  return (
    <video
      ref={playerRef}
      id={id}
      className="cld-video-player cld-fluid"
      {...props}
    />
  );
};

export default CloudinaryPlayer;

