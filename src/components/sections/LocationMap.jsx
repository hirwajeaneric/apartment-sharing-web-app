import React from 'react'
import { MapContainer } from '../styled-components/generalComponents'

export default function LocationMap() {
  return (
    <MapContainer style={{ width: '100%'}}>
        <iframe
            frameborder="0"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD4FmjUaCgW3-DbXE3ZleDnCC-5lv9FOVU&q=-1.951059, 30.094097"
            allowfullscreen>
        </iframe>
    </MapContainer>
  )
}
