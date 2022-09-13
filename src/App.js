
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <h1>Ford Mustang GT</h1>
      <h3>model years: 2005-2009; chassis' code: s197</h3>
      <ol>
        <li>two-door coupe - strong resemblance to the original mustang of the 60's</li>
        <li>5 speed manual transmission - my introduction into the world of stick shifts</li>
        <li>300hp - a little more than my previous bimmer - but still an upgrade</li>
        <li>huge potential for upgrades - might become a very personalized project</li>
      </ol>
      <img src='/s197 gt.jpg' />
      <p>more info in this <a href='https://en.wikipedia.org/wiki/Ford_Mustang_(fifth_generation)'>Wikipedia article</a></p>
    </div>
  );
}

export default App;
