import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

function App() {
  
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);

  const datosConsulta = datos => { 
    if (datos.ciudad === '' || datos.pais === '') {
      setError(true);
      return;
    } else {
      setCity(datos.ciudad);
      setCountry(datos.pais);
      setError(false);
    }
  }
  
  let componente;
  if (error) {
    componente = <Error mensaje='Both fields at requireds' />;
  } else {
    componente = null;
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
