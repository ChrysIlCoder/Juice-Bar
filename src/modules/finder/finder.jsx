import './finder.css'
import FinderGoogleMaps from './finderGoogleMaps.jsx';
import FinderSpiegazione from "./finderSpiegazione.jsx";

export default function Finder(){
    return (
        <div className='finder-container'>
            <FinderGoogleMaps />
            <FinderSpiegazione />
        </div>
    )
}