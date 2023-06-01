

// const About = () => {
//   return (
//     <div className="container">
//       {/* <header>
//         <nav>
//           <ul>
//             <li><a href="index.html">Home</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header> */}
//       <section id="about">
//         <h2>Academic Background</h2>
//         <div className="content">
//           <div className="left">
//             <p>Description of your academic background...</p>
//             <p>My name is Julia Crist and I recently graduated from Ball State University in December of 2022 with a Bachelor’s degree in Advertising, and a minor in Entrepreneurial Management! I am also an entrepreneur & have my own business, Julia K Crist LLC. I do content creation, sponsorships with companies, and more as an influencer/YouTuber.</p>
//           </div>
//           <div className="right">
//             <img src="ab.jpeg" alt="Academic Background Image" />
//           </div>
//         </div>
//       </section>

//       <section id="interests">
//         <h2>Interests</h2>
//         <div className="content">
//           <div className="left-img">
//             <img src="tt.jpeg" alt="Interests Image"  />
//           </div>
//           <div className="right">
//             <p>Description of your interests...</p>
//             <p>My name is Julia Crist and I recently graduated from Ball State University in December of 2022 with a Bachelor’s degree in Advertising, and a minor in Entrepreneurial Management! I am also an entrepreneur & have my own business, Julia K Crist LLC. I do content creation, sponsorships with companies, and more as an influencer/YouTuber.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


// About.js
import React from 'react';

const About = () => {
  return (
    <div className="container">
      
      <section id="background">
        <h2  className="heading">Academic Background</h2>
        <div className="content">
          <div className="left">
            <p>I have an academic background that revolves around computer science. It all started in 2018 when I completed my matriculation from S.M. Public Academy. Then, in 2020, I enrolled in Tabani's College for my intermediate education, majoring in computer science, mathematics, and physics. These subjects helped me understand the core concepts of technology, logical problem-solving, and math. Currently, I am pursuing a Bachelor's degree in Computer Science at the Institute of Business Administration Karachi. I have maintained a GPA of 3.5 so far, which shows my commitment to doing well in my studies. My focus has always been on computer science and I believe this academic background will pave the way for a successful future in the field of technology and innovation.</p>
                     </div>
          <div className="right">
            <img src="lap.jpeg" alt="Academic Background " />
            <img src="iba.jpeg" alt="Aademic Background" />
          </div>
        </div>
      </section>

      <div className="separation-line"></div>

      <section id="interests">
        <h2 className="heading">Interests</h2>
        <div className="content">
          <div className="right">
            <p>I have a range of interests that captivate me and bring me immense satisfaction. One of my passions is watching YouTube videos, particularly vlogs, planning videos, and reality shows. Exploring the lives of others through these visual narratives is both entertaining and insightful. Additionally, I find great pleasure in bullet journaling, a creative and personalized way to organize my thoughts, plans, and goals. It provides me with a sense of accomplishment and keeps me focused. Another interest of mine is table tennis, which I actively participate in. I had the opportunity to compete in an intra-university competition held at Jamshoro, and the thrill of the game and the camaraderie with fellow players were truly rewarding experiences. Lastly, during my leisure time, I enjoy scrolling through Pinterest to find motivation and inspiration for various aspects of life. Whether it's fashion, home decor, or personal growth, Pinterest serves as a valuable source of ideas and encouragement. These diverse interests allow me to explore different facets of my personality and engage with the world around me in a fulfilling way.</p>
            </div>
          <div className="left">
            <img src="tt.jpeg" alt="Interests" />
            <img src="planner.jpeg" alt="Interests" />
          </div>
        </div>
      </section>

      <div className="separation-line"></div>

      <section id="goals">
        <h2 className="heading">Goals</h2>
        <div className="content">
          <div className="left">
            <p>
            My goals are centered around continuous growth and making a positive impact through my work. First and foremost, I aspire to become proficient in writing clean and efficient code. I believe that strong coding skills are essential in the rapidly evolving field of technology, and I strive to constantly enhance my abilities in this area. Additionally, I aim to establish a reputation for myself through my work. I want to be known for delivering high-quality projects and making valuable contributions to my field. Making an impact is another vital objective for me. I yearn to leverage my skills and knowledge to create meaningful solutions that address real-world problems and have a positive influence on individuals and communities. Lastly, one of my ultimate goals is to provide a better lifestyle for both myself and my family. I want to achieve financial stability and create opportunities for personal growth and fulfillment. By working diligently and consistently pursuing these goals, I am confident that I can forge a successful path in my career and make a significant difference in the lives of others.

            </p>
            
            </div>
          <div className="right">
            <img src="codergirl2.jpg" alt="Goals" />
            <img src="goals.png" alt="Goals" />
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
