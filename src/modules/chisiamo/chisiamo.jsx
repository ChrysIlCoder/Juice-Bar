import './chisiamo.css'
import ChiSiamoSpiegazione from "./chisiamoSpiegazione";
import ChiSiamoTimeline from './chisiamoTimeline';

export default function ChiSiamoContent(){
    return (
        <div className="chisiamo-container">
            <ChiSiamoSpiegazione />
            <ChiSiamoTimeline />
        </div>
    )
}