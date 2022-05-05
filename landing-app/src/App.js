import logo from './logo.svg';
import './App.css';

import ng from './ng.png';
import yl from './yl.jpg';
import sp from './sp.png';
import yen from './yen.JPG';
import gagvf from './img1.png';

function App() {
  return (
    <div className="App">
      <div className="title">
        <p>Translating Gun Violence Research into Action</p>
      </div>

      <div className="sponsor">
        <p className="subheading">Our Sponsor</p>
        <div className="sponsor-content">
          <div>
            <img className="gagvf-img" src={gagvf}/>
          </div>
          <p className="content-p">
            Grandmothers Against Gun Violence is a non-profit organization that was founded in 2013 a few 
            weeks after the tragic shooting at Sandy Hook Elementary School in Newtown, Connecticut, with 
            a vision to eliminate gun violence in America. They are a group of 1200 united in their goal to 
            create a safer world for all grandchildren and raising generations. They are committed to diversity 
            and inclusiveness and acknowledge the intergenerational nature of the gun violence prevention movement.
          </p>
        </div>
      </div>

      <div className="project">
        <p className="subheading">About Our Project</p>
        <p className="content-p">
          Gun violence is a prevalent overarching topic that continues to persevere in many communities.
        </p>
        <p className="content-p"> 
          We are creating a platform for understanding and mitigating gun violence through data, to 
          illustrate how every family can help keep everyone safe from gun violence. This project is vital 
          because overall, gun violence in the US is on the rise. In 2019 alone, a minor was killed with a 
          gun every 2 hours and 36 minutes. Information inaccessibility is one leading cause of gun violence, 
          which is what we, in coordination with Grandmothers Against Gun Violence Foundation, are aiming to solve.
        </p>
      </div>

      <div className="features">
        <p className="subheading">Features</p>
        
      </div>

      <div className="team">
        <div className="team-title">
          <p className="subheading">Meet Our Team</p>
          <p className="team-name">Divergent Thinkers</p>
        </div>
        <div className="team-members">
          <div className="profile">
            <img src={ng}/>
            <p className="name">Naisha Gandhi</p>
            <p>Project Manager and Researcher</p>
          </div>

          <div className="profile">
            <img src={yl}/>
            <p className="name">Yeh-Sun Lee</p>
            <p>UX/UI Designer and Researcher</p>
          </div>

          <div className="profile">
            <img src={sp}/>
            <p className="name">Soo Park</p>
            <p>Web Developer and Researcher</p>
          </div>

          <div className="profile">
            <img src={yen}/>
            <p className="name">Yenni Lee</p>
            <p>Front-end Dev and Data Scientist</p>
          </div>
        </div>
      </div>

      


    </div>
  );
}

export default App;
