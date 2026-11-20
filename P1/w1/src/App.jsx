import { loremIpsum } from 'lorem-ipsum'

const tekst = loremIpsum({ count: 3 })

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="card">
            <h5 className="card-header">Lorem ipsum dolor sit amet</h5>
            <div className="card-body">
              <p className="card-text small">{tekst}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <h5 className="card-header">Lorem ipsum dolor sit amet</h5>
            <div className="card-body">
              <p className="card-text small">{tekst}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
