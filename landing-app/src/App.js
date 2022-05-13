import logo from './logo.svg';
import './App.css';

import ng from './ng.png';
import yl from './yl.jpg';
import sp from './sp.png';
import yen from './yen.JPG';
import gagvf from './img1.png';
import gmas from './gmas.png';
import data_vis from './data_vis.png';
import bulb from './bulb.png';
import fam from './fam.png';
import dt_logo from './dt_logo.png';
import ischool from './ischool.png';


function App() {
  return (
    <div className="App">
      <div className="title">
        <img src={dt_logo} alt="Divergent Thinkers logo"/>
        <h1>Translating Gun Violence Research Into Action</h1>
      </div>

      <div className="sponsor">
        <h2>Our Sponsors</h2>
        <div className="sponsor-content">
          <p className="content-p">
              Grandmothers Against Gun Violence is a non-profit organization that was founded in 2013 a few 
              weeks after the tragic shooting at Sandy Hook Elementary School in Newtown, Connecticut, with 
              a vision to eliminate gun violence in America. They are a group of 1200 united in their goal to 
              create a safer world for all grandchildren and raising generations. They are committed to diversity 
              and inclusiveness and acknowledge the intergenerational nature of the gun violence prevention movement.
          </p>
          <img className="gmas-img" src={gmas} alt="Grandmothers Against Gun Violence Foundation group photo"/>
        </div>
      </div>

      <div className="project">
        <h2>About Our Project</h2>
        <p className="content-p"> 
        Gun violence is a prevalent overarching topic that continues to persevere in many communities. 
        We are creating a platform for understanding and mitigating gun violence through data, to illustrate how every family can help keep everyone safe from gun violence. 
        This project is vital because overall, gun violence in the US is on the rise. In 2019 alone, a minor was killed with a gun every 2 hours and 36 minutes. 
        Information inaccessibility is one leading cause of gun violence, which is what we, in coordination with Grandmothers Against Gun Violence Foundation, are aiming to solve.
        </p>
      </div>

      <div className="features">
        <h2>Key Features</h2>

        <div className='feature-item'>
          <div>
            <h3>FEATURE 1: How big of a problem is this?</h3>
            <p>We translate numbers into stories so that the user can dive deeper into the impacts of gun violence, 
            and contextualize the purpose of the project and site.</p>
          </div>
          <img src={data_vis} alt="Bar Graph"/>
        </div>

        <div className='feature-item'>
          <img src={fam} alt="Outline of family of three"/>
          <div>
            <h3>FEATURE 2: How can you protect your family?</h3>
            <p>This is a how-to guide showcasing different methods of properly storing guns so that the user can keep 
            guns away and protected from their child.</p>
          </div>
        </div>

        <div className='feature-item'>
          <div>
            <h3>FEATURE 3: Gun Laws</h3>
            <p>We provide the tools to educate the users and their families and stay up to date with the current laws. 
            Whether they are traveling, visiting or moving to a new state, we provide the most up to date information. Know the laws, 
            know the locks and you can help to bring the numbers down. </p>
          </div>
          <img src={bulb} alt="Blinking light bulb"/>

        </div>
        
      </div>

      <div className='demo'>
        <h2>Demo</h2>
        {/* <iframe width="420" height="315"
          src="https://youtu.be/xfgExWfx0lQ">
        </iframe> */}
        <iframe width="672" height="378" src="https://www.youtube.com/embed/-4FV6XP6m1c" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>


      </div>

      <div className="team">
        <h2>The Team</h2>
        <div className="team-members">
          <div className="profile">
            <img src={ng} alt="Naisha Gandhi headshot"/>
            <p className="name">Naisha Gandhi</p>
            <p className='description'>Project Manager and Researcher</p>
          </div>

          <div className="profile">
            <img src={yl} alt="Yeh-Sun Lee headshot"/>
            <p className="name">Yeh-Sun Lee</p>
            <p className='description'>UX/UI Designer and Front-End Dev</p>
          </div>

          <div className="profile">
            <img src={sp} alt="Soo Park headshot"/>
            <p className="name">Soo Park</p>
            <p className='description'> Web Developer and Researcher</p>
          </div>

          <div className="profile">
            <img src={yen} alt="Yenni Lee headshot"/>
            <p className="name">Yenni Lee</p>
            <p className='description'>Front-end Dev and Data Scientist</p>
          </div>
        </div>
      </div>


      <div className='project-status-div'>
        <h2 className='h2-status'>Project Status</h2>
        <p>University of Washington iSchool Spring 2022 Capstone</p>
        <p>This project will be handed off to the Grandmothers Against Gun Violence Foundation for further development
          and deployment post Capstone presentations in June. The foundation can be contacted about this project/page via email at gagvfoundation@gmail.com.
        </p>
      </div>

      <div className="about-footer">
        <img className="ischool-logo" src={ischool} alt="Logo of iSchool at UW"/>
        <p>copyright © 2021 divergent thinkers</p>
      </div>

    </div>
  );
}

export default App;
