import './App.css';
// @ts-ignore
// const word = require('./assets/HanishArya.docx');
import word from './assets/HanishArya.docx';
// @ts-ignore
import pdf from './assets/HanishArya.pdf';
// const pdf = require('./assets/HanishArya.pdf');

function App() {
  return (
    <div>
      <div className="typewriter name">Hanish Arya</div>
      <div className="subtitle fade-in-subtitle">Scrum Master | Change Agent | Agile Delivery Lead</div>
      <div className="content fade-in">
        <p>
        Hanish is an experienced Scrum Master who enjoys building, and continuously improving, high performing teams (results-driven, cross functional, diverse, self-organizing) to deliver valuable and quality outcomes for customers using a consistent and sustainable cadence across both complex projects and BAU work. An Agile enthusiast with ability to lead, motivate, organize, and coach Scrum teams across different geographies.  
        </p>
        <p>
        His strength involves utilizing the breadth and depth of his experience in a pragmatic way to transform both Agile teams and the organization to achieve goals to delight our customers.
        </p>
      </div>
      <div className="resumeRow fade-in">
        <a href={word}>
          <div className="resumeLink">WORD</div>
        </a>
        <a href={pdf} target="_blank" rel="noreferrer">
          <div className="resumeLink">PDF</div>
        </a>
      </div>
    </div>
  );
}

export default App;
