export default function IntroVideo() {
    return (
      <div className="intro-video bg-section">
        <div className="container-fluid">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-12">
              <div className="intro-video-box">
                <div className="intro-video-image">
                  <figure>
                    <video
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      src="/images/my/v1.mp4"
                      autoPlay
                      muted
                      loop
                    ></video>
                  </figure>
                </div>
  
                <div className="video-play-border-button">
                  <a
                    href="/images/my/v1.mp4"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  