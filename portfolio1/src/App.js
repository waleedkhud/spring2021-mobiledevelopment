import Squats from './components/Squats'
import Sprint from './components/Sprint'
import Jumprope from './components/Jumprope'

//using render method we include the seprate componets in our app by calling it by export name
function App() {
  return (
    <div>
    <h1>Legs intensity workout</h1>
    <h5>This app will calculate the calories burned on your leg workout</h5>
    
    <Squats/>
    <Sprint/>
    <Jumprope/>
  
    </div>
  );
}

export default App;
