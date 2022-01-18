import ReactDOM from 'react-dom'
import App from './App.js'

const names = [
  {
    id: 1,
    name: "Diana Oguren",
    number: "+891 2568734",
  },
  {
    id: 2,
    name: "Eric Silver",
    number: "+891 5987678",
  },
  {
    id: 3,
    name: "Sara Herron",
    number: "+561 2578486",
  }
]

ReactDOM.render(
  <App name={names} />,
  document.getElementById('root')
)