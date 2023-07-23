import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";


const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };


const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/griftwood`}>
                  <ProgressiveImage
                    src={require("../images/file.webp")}
                    //placeholder={require("../images/compressed-image.jpg")}>
                    placeholder={require("../images/file.png")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Griftwood'
                        whileHover={{ scale: 1.1, opacity: 0.75 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title'>Griftwood</div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='container1'>
        <div className='row center1'>
          <div className='image-container1'>
            <div
              className='thumbnail1'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame1'>
                <Link to={`/emera/emera`}>
                  <ProgressiveImage
                    src={require("../images/Final.webp")}
                    //placeholder={require("../images/compressed-image.jpg")}>
                    placeholder={require("../images/Final.png")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Griftwood'
                        whileHover={{ scale: 1.1, opacity: 0.75 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information1'>
              <div className='title1'>Griftwood</div>
            </motion.div>
          </div>
        </div>
      </div>

    </main>
  </>
);

export default Home;