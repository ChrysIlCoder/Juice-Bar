import './chisiamo.css'
import ChiSiamoGrazie from './chisiamoGrazie';
import ChiSiamoSpiegazione from "./chisiamoSpiegazione";
import ChiSiamoTimeline from './chisiamoTimeline';

export default function ChiSiamoContent(){
    return (
        <div className="chisiamo-container">
            <ChiSiamoSpiegazione />
            <ChiSiamoTimeline />
            <ChiSiamoGrazie />
        </div>
    )
}