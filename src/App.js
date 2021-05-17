import logo from './elon_cropped_logo.png';
import swirl from './elon_cropped.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header id={'top'} className="App-header">
        <br />
        <h1 className='2p'>AVOID ASS TAXATION!!</h1>
        <img src={swirl} className="App-logo" alt="logo" />
        <h1>
          If You Don't Want to Have that ASS Taxed...
        </h1>
        <h2>You'd better&nbsp;
        <a
          className="App-link"
          href="#jump"
          //target="_blank"
          rel="noopener noreferrer"
        >
          Learn About That Dogecoin Muthafucka!!
        </a></h2>
      </header>
      <br />
      <br />
      <br />
      <section id={'jump'}>
        <h1>NOW YOU'RE FUCKED!!! HAHAHAHA</h1>
      </section>
    </div>
  );
}

const NavBar = () =>
  <nav id={'navbar'} style={{ backgroundColor:'#761999', borderStyle:'solid', borderWidth:'5px', borderColor:'#cd44dd', borderRadius:'.75%' }} class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#top"><img src={logo} style={{ borderRadius:'50%', width:'180%' }} alt="swirl logo"/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#top">NFTs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">NFTees</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">NFTs</a></li>
            <li><a class="dropdown-item" href="#">NFTees</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#jump">NFTease</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>


export default App;
