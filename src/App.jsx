import './App.css'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

const idCardArray = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: "1.78",
    birth: "1992-07-14",
    picture: "https://randomuser.me/api/portraits/men/44.jpg",

  },
  { 
    lastName: "Delores ",
    firstName: "Obrien",
    gender: "female",
    height: "1.72",
    birth: "1988-05-11",
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  ];

function App() {
  return <div className="App">
    <IdCard prop={idCardArray[0]} />
    <IdCard prop={idCardArray[1]} />

    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>

    <Random min={1} max={6}/>
    <Random min={1} max={100}/>

    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />

    <CreditCard
  type="Visa"
  number="1234567890123456"
  expirationMonth={3}
  expirationYear={2025}
  bank="Big Bank, Inc."
  owner="John Doe"
  bgColor="#f2f2f2"
  color="black"
/>
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>

<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white"
/>

<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>

<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

</div>
}

export default App;
