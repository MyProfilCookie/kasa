import React from 'react'
import BannerHome from '../../assets/bannerHome.png'
import LocationList from '../../components/LocationList/locationList';
import './maison.css'



export default function Maison() {

  return (
    <main className="main-maison">
        <article className ="banner">
          <img className="banner_img" src={BannerHome} alt="Chez vous, partout et ailleurs" />
          <h2 className="banner_title">Chez vous, partout et ailleurs</h2>
        </article>
        <LocationList></LocationList>
    </main>
  )
}
