import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {
  
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect( () => {
    if(city==='') return;
    
    const consultarAPI = async () => {
      const appId = '7c57b75a927a65f51934b6205acf945e';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
      const resp = await fetch(url);
      const resultado = await resp.json();
      setResult(resultado);
    }

    consultarAPI();
  }, [city, country] );

  const datosConsulta = datos => { 
    if (datos.ciudad === '' || datos.pais === '') {
      setError(true);
      return;
    }
    setCity(datos.ciudad);
    setCountry(datos.pais);
    setError(false);
  }


  
  let componente;
  if (error) {
    componente = <Error mensaje='Both fields at requireds' />;
  } else if (result.cod === "404") {
    componente = <Error mensaje={result.message} />;
  } else {
    componente = <Clima climaInfo={result} />;
  }

  return (
    <div className="App">
      <Header titulo='Wheater React App' />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta} />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
