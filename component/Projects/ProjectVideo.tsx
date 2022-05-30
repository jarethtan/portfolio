import React, { Fragment } from "react";
import classes from "./ProjectVideo.module.css";
import { FaPlay } from "react-icons/fa";
import dynamic from "next/dynamic";
import Image from "next/image";

const ProjectVideo: React.FC<{ element: string[] }> = ({ element }) => {
  const ReactPlayer = dynamic(() => import("react-player/wistia"), { ssr: false });
  const method = element[2];
  return (
    <Fragment>
      {method == "video" ? (
        <div className={classes.projectVideo}>
          <ReactPlayer
            light={element[1]}
            playing
            playIcon={
              <button className={classes.playButton}>
                <FaPlay className={classes.playIcon} />
              </button>
            }
            controls
            width="100%"
            url={element[0]}
            className={classes.video}
          />
        </div>
      ) : (
        <div className={classes.projectImage}>
          <Image src={element[1]} layout="fill" objectFit="fill" className={classes.images} />
        </div>
      )}
    </Fragment>
  );
};

export default ProjectVideo;
