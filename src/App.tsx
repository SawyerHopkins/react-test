import './App.css';
import { Form } from './Form'
import { FormDataContract, Elements } from './contracts'

const data: FormDataContract = {
  elements: [{
    type: Elements.Meta.ElementType.Price,
    data: {
      price: 10
    }
  }, {
    type: Elements.Meta.ElementType.Title,
    data: {
      title: 'wow'
    }
  }]
}

function App() {
  return (
    <div className="App">
      <Form {...data} />
    </div>
  );
}

export default App;
