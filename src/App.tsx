import './App.css'
import { data } from './utils/data'
import { User } from './models/User';
import { UserCardCollection } from './models/UserCardCollection';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const user_cards = new UserCardCollection(data.map((user) => new User(user.name, user.current_weight, user.goal_weight, user.image_url)));
  const display_cards = user_cards.create_card_collection()  
  return (
    <div className="App">
      <Navbar/>
      <div className='card-container'>
      {display_cards}
      </div>
    </div>
  )
}

export default App
