import React, {useState} from 'react';

function Formulario ({datosConsulta}) {
    
    const [search, setSearch] = useState({
        ciudad : '',
        pais : ''
    });

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    };

    const consultarClima = e => {
        e.preventDefault();
        datosConsulta(search);
    };

    return (
        <form onSubmit={consultarClima} >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad"> Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">--Select a country--</option>
                    <option value="US">United States</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Wheater now!"
                />
            </div>
        </form>
    );
}

export default Formulario;