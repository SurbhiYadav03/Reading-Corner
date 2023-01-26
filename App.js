import './App.css';

function App(props){
  return(
      <>
          <div className="container">
              <div className="card">
                       <div className="img">
                            <img className="image" src={props.bookimg}></img>
                       </div>

                       <div className="card-info">
                           <span>{props.name}</span><br/>
                           <span>{props.author}</span><br/>
                           <span>{props.price}</span><br/>
                           <a href="https://www.bookswagon.com/">
                              <button className="btn">View</button>
                           </a>
                       </div>
              </div>
          </div>

      </>
  )
}
export default App;
