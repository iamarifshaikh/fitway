import One from '../../Assets/Images/NutritionOne.png';
import Two from '../../Assets/Images/NutritionTwo.png';
import "./Nutrition.scss";

const Nutrition = () => {
  return (
    <div className='fitness-nutrition'>
      <div className='nutrition-one'>
        <h1 className='nutrition-one-text'>Now It's Even Easier To Eat Healthy And Tasty</h1>
      </div>
      <div className='nutrition-two'>
        <img src={One} className='nutrition-image' alt="" />
        <p className='nutrition-two-text'>FitWay goes above and beyond to cater to your specific needs, placing a significant emphasis on personalized dietary options. We understand that diet plays a pivotal role in achieving your fitness goals, and that's why our platform offers a multitude of dietary plans and nutrition guidance.</p>
      </div>
    </div>
  )
}

export default Nutrition;