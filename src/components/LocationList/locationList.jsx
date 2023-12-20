import { Link } from "react-router-dom";
import React from 'react';
import { Usefetch } from '../../utils/hooks'
import { Loader } from '../../utils/loader/loader'
import '../../utils/loader/loader.css'
import './locationList.css'

// Compare this snippet from src/components/LocationList/locationList.jsx:

export default function LocationList() {
  const { data, isLoading, error } = Usefetch(`/logements.json`)
  if (error) {
    return <pre>{error}</pre>
  }
      return(
          <section className="location_container">
          {isLoading ? (
            <div className="loader_wrapper">
              <Loader data-testid="loader" /></div>
          ) : (data.map((logement) => (
                      <Link className="location_link" key={logement.id} to={`/Logement/${logement.id}`}>
                          <img className="location_img" key={"cover"+logement.id} src={logement.cover} alt={logement.title} />
                          <h2 className="location_title" key={"title"+logement.id}>{logement.title}</h2>
                          <div className="background"></div>
                      </Link>
                  )
              ))}
          </section>
      )
  }





  
  