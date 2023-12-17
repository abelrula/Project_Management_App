import {parseISO,formatDistanceToNow} from "date-fns"
const TimeCreatedAt = ({date}) =>
{
    if(date){
    const dateFormat = parseISO( date )
    const timePeriod = formatDistanceToNow( dateFormat )
    var timeAgo=`${timePeriod} ago `
    }
    
    return (
        <>
            <p>{timeAgo}</p>
        </>
    )
}
export default TimeCreatedAt