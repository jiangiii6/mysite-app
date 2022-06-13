import React from "react";

function Others() {
  return (
    <div classname="container">
    <div className="about">
      <div className="about__box">
        <h1 className="label">About Me</h1>
        <h3 className="label">Sharing a little bit of my story...</h3>
      </div>

      <div className="about__row">
        <h2 className="label">General Overview</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum
        </p>
      </div>

      <div className="about__row">
        <h2 className="label">Statistics</h2>
        <h5 className="label">
          <em>And for those that don't fancy reading:</em>
        </h5>

        <p >Male, 200 years old.</p>
        <p>Five feet 110 inches</p>
        <p>Favorite fonts:Roboto </p>
        <p>Loves to learn new things</p>
      </div>

      <div className="about__box">
        <a href="#contact" class="about__btn">
          Contact
        </a>
      </div>
    </div>

    <div className="summary">
		
				<div className="summary__row">
					<div className="summary__box">
						
            	<div className="summary__img">
								<img className="img-responsive" src={require('../assets/images/developerdesign.svg')}/>
							</div>
          
							<div className="description">
								<h3>Development and Design</h3>
								<p>I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.</p>
							</div>
					</div>


					<div className="summary__box">
							<div className="summary__img">
								<img className="img-responsive" src={require("../assets/images/responsivedesign.svg")}/>
							</div>
            

					
							<div className="description">
								<h3>Responsive Layouts</h3>
								<p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
							</div>
						</div>
					</div>
			

				<div className="summary__row">
					<div className="summary__box">			
							<div className="summary__img">
								<img className="img-responsive" src={require('../assets/images/innovativesolutions.svg')}/>
							</div>


							<div className="description">
								<h3>Ideas and Solutions</h3>
								<p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
							</div>
						</div>
	

					<div className="summary__box">
					<div className="summary__img">
							<img className="img-responsive" src={require('../assets/images/passion.svg')}/>
              </div>
							<div className="description">
								<h3>Passion and Dedication</h3>
								<p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. </p>
							</div>
		
					</div>
				</div>
		
		
    </div>
    </div>
  );
}

export default Others;
