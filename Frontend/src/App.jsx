import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Authentication from './Components/Signup/Signup';
import Admin from './Components/Admin/Admin'
import User from './Components/User/User'
import Community from './Components/Community/Community'
import WorkoutPlans from './Components/WorkoutPlans/WorkoutPlans';
import NutritionPlans from './Components/Nutrition/Plans';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Hero} />
        <Route path='/authenticate' Component={Authentication} />
        <Route path='/adminpage' Component={Admin}/>
        <Route path='/userpage' Component={User}/>
        <Route path='/community' Component={Community}/>
        <Route path='/workouts' Component={WorkoutPlans}/>
        <Route path='/nutrition-plans' Component={NutritionPlans}/>
      </Routes>
    </Router>
  );
};

export default App;