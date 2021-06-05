import './App.css';
import Profile from './profile/Profile';
import photo from './ProfilePhoto.jpeg';

function App() {
  function handleName(fullName){
    alert(fullName)
  }
  return (
    <div>
      <Profile handleName= {handleName} fullName ="Meriem Jebara" bio ="I'm a student in GoMyCode" profession ="Logistic Assistante">
        <img src={photo} alt="Profilephoto"/>
      </Profile>
    </div>
  );
}

export default App;
