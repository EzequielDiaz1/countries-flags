import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {getCountryDetail} from './../actions/index'
import {useParams} from 'react-router-dom'
import {useHistory, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import './Home.css';

const wrapper = {
    maxWidth: '1200px',
    width: '100%',
    border: '0.5px solid grey',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: 'rgb(248,249,250)'
}

const wrapperContent = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}

const image = {
    width: '500px',
    height: '315px',
}

const CountryDetail = ({getCountryDetail, countryDetail}) => {

    const {name} = useParams()
    const history = useHistory();

    useEffect(() => {
        getCountryDetail(name)
    }, [])

    
    
    return (
        <div>
            <div className="shadow" style={wrapper}>
                <button class="btn btn-outline-light text-danger border-0 btn-lg" onClick={() => history.push('/')} style={{float:'right'}}> 
                    <FontAwesomeIcon icon={'fas', faTimesCircle}/>
                </button>
                <h3 className='text-black-50'>Mi proximo destino es :</h3>
                <hr />
                <div className="paisDetalle" style={wrapperContent}>
                    <img
                    src={countryDetail[0] && countryDetail[0].flag}
                    style={image}
                    className="fotito"
                    />
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', maxWidth:'400px'}}>
                        <div className='p-3' >
                        <h5 className='display-4'>{countryDetail[0] && countryDetail[0].name}</h5>
                        <div>
                            <p><strong>Capital:</strong> {countryDetail[0] && countryDetail[0].capital}</p>
                            <p><strong>Habitantes:</strong> {countryDetail[0] && countryDetail[0].population}</p>
                            <p><strong>Continente:</strong> {countryDetail[0] && countryDetail[0].region}</p>
                            <p><strong>Zona horaria:</strong> {countryDetail[0] && countryDetail[0].timezones}</p>
                            <p><strong>Moneda:</strong> {countryDetail[0] && countryDetail[0].currencies[0].name}</p>
                            <p><strong>Prefijo de llamada:</strong> +{countryDetail[0] && countryDetail[0].callingCodes[0]}</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

const mapStatetoProps = (state) => ({
    countryDetail: state.countryDetail
  })


const mapDispatchToProps = (dispatch) => {
    return {
        getCountryDetail: (name) => dispatch(getCountryDetail(name))
    }
  }


export default connect(mapStatetoProps, mapDispatchToProps)(CountryDetail)
