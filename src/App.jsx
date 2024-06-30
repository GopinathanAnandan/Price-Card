
import './App.css'
import PriceCard from './Components/PriceCards';


const priceCards = [
  {
    planName: 'FREE',
    price: 0,
    features: [
      { name: 'Single User', available: true },
      { name: '50GB Storage', available: true },
      { name: 'Unlimited Public Projects', available: true },
      { name: 'Community Access', available: true },
      { name: 'Unlimited Private Projects', available: false },
      { name: 'Dedicated Phone Support', available: false },
      { name: 'Free Subdomain', available: false },
      { name: 'Monthly Status Reports', available: false },
    ],
  },
  {
    planName: 'PLUS',
    price: 9,
    features: [
      { name: '5 Users', available: true },
      { name: '50GB Storage', available: true },
      { name: 'Unlimited Public Projects', available: true },
      { name: 'Community Access', available: true },
      { name: 'Unlimited Private Projects', available: true },
      { name: 'Dedicated Phone Support', available: true },
      { name: 'Free Subdomain', available: true },
      { name: 'Monthly Status Reports', available: false },
    ],
  },
  {
    planName: 'PRO',
    price: 49,
    features: [
      { name: 'Unlimited Users', available: true },
      { name: '50GB Storage', available: true },
      { name: 'Unlimited Public Projects', available: true },
      { name: 'Community Access', available: true },
      { name: 'Unlimited Private Projects', available: true },
      { name: 'Dedicated Phone Support', available: true },
      { name: 'Free Subdomain', available: true },
      { name: 'Monthly Status Reports', available: true },
    ],
  },
];

const App = () => {
  return (
    <div className="app">
      <h1>React Price Card Task</h1>
      <div className="price-cards-container">
        {priceCards.map((card, index) => (
          <PriceCard
            key={index}
            planName={card.planName}
            price={card.price}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
