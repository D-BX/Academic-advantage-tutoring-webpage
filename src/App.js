import logo from './learntrez.webp';
import tutorpic from './tutoo.png';
import tutorback1 from './tutor-back1.jpg';
import profesh from './dawg-image.jpg';
import contaxt from './call-us.jpg';
import summer from './summercampflyer.png'
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="nav-elements">
        <nav>
          <ul>
          <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact Me</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img className="profesh" src={profesh} alt="Professional Pic" />
        <h2 className="about-heading">About Me</h2>
        <p className="about-paragraph">
          Hey there! I'm Oluwadayo Bamgbelu, a Honors Computer Science major at Texas A&M University, with an expected graduation in 2027.
        </p>
        <p className="about-paragraph">
          I'm passionate about coding and have experience in various programming languages and technologies, including Python, React, Django, SQL, Java, JavaScript, HTML, and CSS. I've also worked with tools and frameworks like Git, Linux, TensorFlow, and Amazon Web Services (AWS).
        </p>
        <p className="about-paragraph">
          During my academic journey, I've gained valuable experience in the world of tech. I've also had the opportunity to apply my knowledge as a Software Development Intern at Tecmend, where I developed adapters and routines for seamless data migration between applications.
        </p>
        <p className="about-paragraph">
          Besides my technical skills, I'm known for my leadership abilities. I founded and manage a thriving virtual tutoring business, Academic Advantage Tutoring, where I've helped over 10 students excel in math, reading, and computer science. I used React Native and CSS to create an engaging webpage for our users.
        </p>
        <p className="about-paragraph">
          In addition to tutoring, I've been actively involved in extracurricular activities. As the Fundraising Director of the Seven Lakes FRC Robotics Team, I successfully secured annual funding exceeding $10,000. I'm also a co-founder, secretary, and president of the Seven Lakes Cyber Security Club, where I've educated students about the importance of cybersecurity through engaging presentations.
        </p>
        <p className="about-paragraph">
          When I'm not coding or leading, I'm crafting innovative projects for fun. For instance, I developed Suggestify, a website that uses React Native and Spotify's API to recommend music based on user preferences. I also created Tecmend Connect, a data integration software using Python, React, and SQL, automating report generation and data visualization.
        </p>
        <p className="about-paragraph">
          Beyond the tech world, I've achieved recognition as a Code Next $150,000 Scholarship recipient and a former Google Code Next Engineer. I've also showcased my talents as a TSA Webmaster National Finalist.
        </p>
        <p className="about-paragraph">
          While coding is my passion, I also enjoy a balanced life. I'm a sports enthusiast who loves playing soccer, basketball, and many other sports. I find solace in books and often immerse myself in captivating stories.
        </p>
      </div>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="dawg">
      <h2>Contact Me</h2>
      <img className="contaxt" src={contaxt} alt="Contact Us" />
      <p className='contactedit'>Please don't hesitate to contact me if you have any questions! An FAQ section will be built the more questions we receive from interested parents!<br /><br /> 
        If interested, please email <a href="mailto:ddmds66@gmail.com?subject=Inquiry%20About%20Tutoring">ddmds66@gmail.com</a> with your childs grade level, subject of interest, and anything else you feel we should know about your child! <br /><br />
        My LinkedIn: <a href="https://www.linkedin.com/in/Oluwadayo-Bamgbelu" target="_blank" rel="noopener noreferrer">Oluwadayo Bamgbelu</a>.<br /><br /> 
        My Github: <a href="https://github.com/D-BX" target="_blank" rel="noopener noreferrer">Github</a>.<br /><br /> 
        My Resume: <a href="https://drive.google.com/file/d/1rIwTPWB_O5MJO_B54gGf3LOuk3-Cg2x7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume.</a>
        

      </p>
    </div>
  );
}

function Home() {
  return (
    <div className="dawg">
      <h2 className='dawgman'>Academic Advantage Tutoring</h2>
      <div className="top-half">
        <h3 className='dawgman1'>"Learn better, study smarter, and achieve academic success with my tutoring!"📝</h3>
      </div>
      <p>Welcome to Academic Advantage Tutoring! I offer a variety of virtual one-on-one tutoring services for grades K-12. My mission is to help your child be the best they can be and reach the heights of their academic potential.</p>
      <div className='moveitdown'>
        <img className="tut" src={tutorpic} alt="Tutor Pic" />
        <h4>Advantages of Virtual Tutoring:</h4>
        <p className='nexttotut'>Convenience: Students can receive tutoring from anywhere with an internet connection, making tutoring more accessible to students who have busy schedules.<br /><br />
          Flexibility: Virtual tutoring can be scheduled at any time that is best convenient for the student. Our number one priority is you!<br /><br />
          Increased Resources: The internet is vast, and if your child has a problem that we can't immediatly solve, the time it takes to search for help is much quicker than it would be in-person.<br /><br />
          Connection: Despite being virtual, this does not sacrifice the student-teacher connection that many children desire. We still offer real-time feedback at any time of the day, recognize accomplishments and assist in areas that require improvement, adapt our teaching style to best accomodate the student, and even connect on topics and hobbies that don't necessarily relate to academia. We want to still have a close connection to your child whilst also tutoring them to create the most comfortable environment possible.
        </p>
        <img className="logo" src={logo} alt="My Logo" />
        <h4 className='movedawgdown'>Our Tutoring Services</h4>
        <p className='movedawgdown'>
          <ul>
            <li>
              Academic Tutoring: <br />Homework, test preparation, and understanding academic concepts.
            </li>
            <li>
              Computer Science: We offer tutoring and teaching of various computer science languages such as Java, Python, HTML, and CSS.
            </li>
            <li>
              High School Counseling: <br /> Need help picking classes? Not to worry as we can help you select the best classes for your career path!
            </li>
          </ul>
          Want to learn more? Go to the Contact Me section at the top of your page to find out more information!
        </p>
      </div>

    </div>
  );
}


export default App;