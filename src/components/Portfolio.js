import React from "react";

function Portfolio() {
  return (
    <div className="projects" id="projects">
 
 <div className="projects__box">

      <div className="projects__title">
        <div className="projects-header">
          <h1>Projects and Portfolio</h1>
        </div>

            <div className="projects-header">
              <h3>Sharing my endeavors and passions...</h3>
            </div>
          </div>

          <div className="card">
            <div className="p1">
              <h3>LUV TALK Website</h3>
              <p>
                Website, created during my first internship, which utilized
                HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.{" "}
              </p>
         

   
                  <div className="project-more-info">
                    <a className="btn btn-default btn-border" href="/#">
                      More
                    </a>
                  </div>
                </div>
 
    

        <div className="p2">
              <h3>Personal Website</h3>
              <p>
                Enjoyable side project that was created to experiment with more
                HTML and CSS, but also provided an outlet to showcase my
                abilities and interests.
              </p>
       
                <div className="project-more-info">
                  <a className="btn btn-default btn-border" href="/#">
                    More
                  </a>
                </div>
            </div>
        

            <div className="p3">
              <h3>Strike Zone Analysis</h3>
              <p>
                Data analytics project completed during my time at the Illinois
                Math and Science Academy which studied the baseball strike zone
                based on the state of the game.
              </p>
            
                <div className="project-more-info">
                  <a className="btn btn-default btn-border" href="/#">
                    More
                  </a>
                </div>
              </div>
              </div>

       
   

            <div className="see-more-button">
              <a className="btn btn-default btn-border" href="/#">
                More Projects
              </a>
            </div>  
        </div>
        </div>
  
  );
}

export default Portfolio;
