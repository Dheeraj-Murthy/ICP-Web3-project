import React from 'react'
import '../StyleSheets/style.css'
import { useState, useEffect } from 'react';
import Home from './Home';
import arrowImg from '../Rescources/arrow1.png'

const words = ['Web3 Developer', 'Game Developer', 'Gamer'];

const Dash = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 100;

    if (isDeleting) typingSpeed /= 2;

    const handleTyping = () => {
      const word = words[currentWord];

      if (isDeleting) {
        setText((prev) => word.substring(0, prev.length - 1));
      } else {
        setText((prev) => word.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === word) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWord]);

  const handleSmoothScroll = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    const targetId = event.currentTarget.getAttribute('href'); // Get the href value
    const targetElement = document.querySelector(targetId); // Select the target element

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the target
    }
  }

  return (
    <div>
      <header>
        <nav>
          <div className="left">Dheeraj's Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="#begin" onClick={handleSmoothScroll}>Home</a></li>
              <li><a href="#talk" onClick={handleSmoothScroll}>Talk</a></li>
              <li><a href="#begin" onClick={handleSmoothScroll}>Services</a></li>
              <li><a href="#projects" onClick={handleSmoothScroll}>Past Projects</a></li>
              <li><a href="/" onClick={handleSmoothScroll}>Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="first" id="begin">
          <div className="leftSection">
            Hello, My name is
            <span className="purple"> Dheeraj</span>
            <div>and I am a passionate </div>
            <div id="animated_Text">
              <span className='element'>{text}</span>
            </div>
          </div>
          <div className="rightSection">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4974/4974492.png"
              alt=""
            />
          </div>
        </section>
        <section className='first' id="talk">
          <Home />
          <div className='gap'></div>
        </section>
        <hr />
        <div className="transition"></div>
        <section className="second" id="projects">
          <section
            className="timeline"
            id="timeline"
          >
            <div className="center">
              <div className="project">
                <h1>Projects</h1>
                <img
                  src={arrowImg}
                  alt=""
                  id="arrow"
                />
              </div>
            </div>

            <div className="element left-element">
              <div className='gap' />
              <h3>IAS Architecture processor Design</h3>
              <span>
                Built a simulator for the IAS processor. The simulator takes in
                20bit binary input and processes it with the appropriate steps and
                displays the output which is stored in the Accumulator.
              </span>
            </div>
            <div className="element right-element">
              <div className='gap' />
              <h3>Notes App in Flutter</h3>

              <span>
                Built a flutter application which uses the Firebase CLI which
                allows users to write notes and store them in the cloud. The notes
                can be written, edited and shared on the cloud database.
              </span>
            </div>
            <div className="element left-element three">
              <div className='gap' />
              <h3>MIPS Architecture processor Design</h3>

              <span>
                Built a simulator of the MIPS processor. The simulator takes in
                the assembly code that is output by the MARS simulator. The user
                can write MIPS code and convert it to assembly in the MARS
                simulator. Then the user can input this assembly code to the MIPS
                processor.
              </span>
            </div>
          </section>
        </section>
      </main>

    </div>
  )
}

export default Dash
