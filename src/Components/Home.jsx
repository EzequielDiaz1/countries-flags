import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { getCountries, getCountriesByRegion } from './../actions/index'
import {useHistory, Link} from 'react-router-dom';
import './Home.css';




const tarjeta = {
    width: '18rem',
    margin: '15px',
    padding: '10px',
     
}

const textoNoPaises = {
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '30px',
    height: '200px',
    alignItems: 'center',
    display:'flex'
}



function Home({getCountries, getCountriesByRegion, paises, paisesContinente}) {

    const [countries, setCountries] = useState()
    const [search, setSearch] = useState('')
    const [filtro, setFiltro] = useState(false)
    const history = useHistory();

    useEffect(() => {
        getCountries()
        .then(data => setCountries(data.payload))
    }, [])

   const paisesFiltrados = countries && countries.filter( country => {
       return country.name.toLowerCase().includes(search.toLowerCase()) || 
       country.capital.toLowerCase().includes(search.toLowerCase()) || 
       country.region.toLowerCase().includes(search.toLowerCase())
   })

   console.log(filtro)

    return (
        <div className='home'>
            <div class="collapse navbar-collapse" className='buscador' style={{display:'flex', justifyContent:'center', marginTop:'10px'}} id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2 shadow" style={{width:'400px'}} type="search" placeholder="Buscar país o capital" aria-label="Search" onChange={(e) => setSearch(e.target.value)}/>
                </form>
                <div class="dropdown">
                    <button class="btn btn-outline-secondary dropdown-toggle shadow" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Continente
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" style={{cursor:'pointer'}} onClick={() => {
                            getCountriesByRegion('americas')
                            setFiltro(true)} }> America </a>
                        <a class="dropdown-item" style={{cursor:'pointer'}} onClick={() => {
                            getCountriesByRegion('asia') 
                            setFiltro(true)}}> Asia</a>
                        <a class="dropdown-item" style={{cursor:'pointer'}} onClick={() => {
                            getCountriesByRegion('europe')
                            setFiltro(true)}}>Europa</a>
                        <a class="dropdown-item" style={{cursor:'pointer'}} onClick={() => {
                            getCountriesByRegion('oceania')
                            setFiltro(true)}}>Oceania</a>
                        <a class="dropdown-item" style={{cursor:'pointer'}} onClick={() => {
                            getCountriesByRegion('africa')
                            setFiltro(true)}}>Africa</a>
                    </div>
                    {filtro ?
                        <button class="ml-2 btn btn-outline-danger border-0 btn-sm" onClick={() => {
                            getCountries()
                            setFiltro(false)}}>Quitar filtros</button>
                        : null
                    }
                </div>

                
                
            </div>
            {paises ? 
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center tarjeta'>
                {paisesFiltrados && paisesFiltrados.length === 0 ? 
                    <p style={textoNoPaises}><strong>Ningún país coincide con su búsqueda </strong></p> 
                : paisesFiltrados && paisesFiltrados.map(c => (
                
                    <div class="card shadow col mb-4 p-3 mb-5 bg-white rounded" style={tarjeta}>
                        <img loading="lazy" onClick={() => history.push(`/detail/${c.name.toLowerCase()}`)} src={c.flag} class="card-img-top" style={{height:'173px', width:'266', cursor: 'pointer'}} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title" style={{cursor: 'pointer'}} onClick={() => history.push(`/detail/${c.name.toLowerCase()}`)}>{c.name}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Capital: {c.capital}</li>
                            <li class="list-group-item">Habitantes: {c.population}</li>
                            <li class="list-group-item">Continente: {c.region}</li>
                        </ul>
                    </div>
                
                ))}
            </div>
            : 
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center tarjeta'>
                {paisesContinente && paisesContinente.map(c => (
                
                    <div class="card shadow p-3 mb-5 bg-white rounded" style={tarjeta}>
                        <img loading="lazy" onClick={() => history.push(`/detail/${c.name.toLowerCase()}`)} src={c.flag} class="card-img-top" style={{height:'173px', width:'266', cursor: 'pointer'}} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title" style={{cursor: 'pointer'}} onClick={() => history.push(`/detail/${c.name.toLowerCase()}`)}>{c.name}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Capital: {c.capital}</li>
                            <li class="list-group-item">Habitantes: {c.population}</li>
                            <li class="list-group-item">Continente: {c.region}</li>
                        </ul>
                    </div>
                
                ))}
            </div>}
        </div>
    )
}

const mapStatetoProps = (state) => ({
    paises: state.countries,
    paisesContinente: state.countriesFiltered
  })


const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries()),
        getCountriesByRegion: (region) => dispatch(getCountriesByRegion(region))
    }
  }


export default connect(mapStatetoProps, mapDispatchToProps)(Home)
