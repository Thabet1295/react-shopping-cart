import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
          <div className="layout">
             <Header/>
              <main>
                   Main Content
              </main>
              <Footer/>
          </div>
    </div>
  );
}

export default App;
