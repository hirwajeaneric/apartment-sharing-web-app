import React, { useEffect, useState } from 'react'
import { Bed, Chair, LocationCity, StarOutlineSharp } from '@mui/icons-material';
import { FaRulerCombined, FaShower } from 'react-icons/fa';
import { PropertyDetailsStyles } from '../styled-components/generalComponents';

export default function PropertyMajorDetails({descriptions}) {
    const [details, setDetails] = useState({
        rentPrice: 0,
        propertyType: '',
        bedRooms: 0,
        bathRooms: 0,
        status: '',
        furnished: false, 
        dimensions: 0, 
        location: '',
    });

    useEffect(() => {
        setDetails({
            rentPrice: descriptions.rentPrice,
            propertyType: descriptions.propertyType,
            bedRooms: descriptions.bedRooms,
            bathRooms: descriptions.bathRooms,
            status: descriptions.status,
            furnished: descriptions.furnished, 
            dimensions: descriptions.dimensions, 
            location: descriptions.location,
        })
    },[descriptions])

    return (
        <PropertyDetailsStyles style={{ fontSize: '90%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Bed style={{ color: '#1f3d7a' }}/>
                <p style={{ fontSize: '110%', margin: '10px 0', color: '#0a1429' }}>{details.bedRooms}</p>
                <p style={{ color: '#1f3d7a' }}>Bed Rooms</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FaShower style={{ color: '#1f3d7a' }}/>
                <p style={{ fontSize: '110%', margin: '10px 0', color: '#0a1429' }}>{details.bathRooms}</p>
                <p style={{ color: '#1f3d7a' }}>Bath Rooms</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Chair style={{ color: '#1f3d7a' }}/>
                <p style={{ fontSize: '110%', margin: '10px 0', color: '#0a1429' }}>{details.furnished ? 'Yes' : 'No'}</p>
                <p style={{ color: '#1f3d7a' }}>Furnished</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FaRulerCombined style={{ color: '#1f3d7a' }}/>
                <p style={{ fontSize: '110%', margin: '10px 0', color: '#0a1429' }}>{details.dimensions} m2</p>
                <p style={{ color: '#1f3d7a' }}>Dimensions</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <StarOutlineSharp style={{ color: '#1f3d7a' }}/>
                <p style={{ fontSize: '110%', margin: '10px 0', color: '#0a1429' }}>{details.status}</p>
                <p style={{ color: '#1f3d7a' }}>Status</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <LocationCity style={{ color: '#1f3d7a' }}/>
                <p style={{ fontSize: '110%', margin: '10px 0', color: '#0a1429' }}>{details.location}</p>
                <p style={{ color: '#1f3d7a' }}>Location</p>
            </div>
        </PropertyDetailsStyles>
    )
}
