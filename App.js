// import logo from '.kkkkkk/logo.svg';
import './App.css';
import Productlist from './Productlist';
function App() {
  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Phone", price:"21,000", imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcMnBkFl80Fv5nZGkvqXsU5mTbhD3KhPJOg&usqp=CAU"},{no:"2",name:"Car", price:"70,00,000", imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWSwOsvpUQRGuhwMrs18Ax2piMUnXU_l0Lg&usqp=CAU"}]}/>
    </div>
  );
}

export default App;
