import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { getCountries } from './../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const tarjeta = {
    width: '18rem',
    margin: '15px',
    padding: '10px'
}



function Home({getCountries}) {

    const [countries, setCountries] = useState()
    const [search, setSearch] = useState('')

    useEffect(() => {
        getCountries()
        .then(data => setCountries(data.payload))
    }, [])

   const paisesFiltrados = countries && countries.filter( country => {
       return country.name.toLowerCase().includes(search.toLowerCase())
   })

    return (
        <div>
            <div class="collapse navbar-collapse" style={{display:'flex', justifyContent:'space-around', marginTop:'10px'}} id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar país" aria-label="Search" onChange={(e) => setSearch(e.target.value)}/>
                </form>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center'>
                {paisesFiltrados && paisesFiltrados.map(c => (
                <div class="card shadow p-3 mb-5 bg-white rounded" style={tarjeta}>
                    <img src={c.flag} class="card-img-top" style={{height:'173px', width:'266'}} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{c.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Capital: {c.capital}</li>
                        <li class="list-group-item">Habitantes: {c.population}</li>
                        <li class="list-group-item">Continente: {c.region}</li>
                    </ul>
                </div>
                ))}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries())
    }
  }


export default connect(null, mapDispatchToProps)(Home)
