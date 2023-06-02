import React, { useState } from 'react'
import { Bathroom, BathroomRounded, BathroomTwoTone, Bed, Chair, Shower, StarOutlineSharp } from '@mui/icons-material';
import { FaRuler, FaRulerCombined, FaShower } from 'react-icons/fa';
import { PropertyDetailsStyles } from '../styled-components/generalComponents';

export default function PropertyMajorDetails() {
    const [details, setDetails] = useState({
        rentPrice: 213,
        propertyType: '1 BedRoom + Living Room',
        bedRooms: 3,
        bathRooms: 2,
        status: 'For Rent',
        furnished: true, 
        dimensions: 234, 
        location: 'kibagabaga',
    })

    return (
        <PropertyDetailsStyles>
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
        </PropertyDetailsStyles>
    )
}
