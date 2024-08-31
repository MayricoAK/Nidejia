'use client'
import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { CiLocationOn } from 'react-icons/ci'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { divIcon } from 'leaflet'

function MyMap() {
    const [windowReady, setWindowReady] = useState(false)
    const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 })

    useEffect(() => {
        setWindowReady(true)
    }, [])

    if (windowReady) {
        return (
            <MapContainer
                center={[geoData.lat, geoData.lng]}
                zoom={12}
                className="h-[250px] w-full rounded-[20px]"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {geoData.lat && geoData.lng && (
                    <Marker
                        position={[geoData.lat, geoData.lng]}
                        icon={divIcon({
                            iconSize: [24, 24],
                            iconAnchor: [24 / 2, 24 + 9],
                            className: 'mymarker',
                            html: `<div>
              <Image
                src='/icons/location-dark.svg'
                alt='location-dark'
                height={0}
                width={0}
                className='w-6 h-6'
              />
            </div>`,
                        })}
                    />
                )}
            </MapContainer>
        )
    }
}
export default MyMap
