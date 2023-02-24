import './UserDisplayCard.css';
type UserDisplayCardProps = {
    name: string;
    current_weight: number;
    goal_weight: number;
    image_url: string;
}
const UserDisplayCard = (props: UserDisplayCardProps) => {
    return (
        <div className='displayCard'>
            <h1>{props.name}</h1>
            <img src={props.image_url} className='profilePic'/>
            <h2>Current Weight</h2>
            <p>{props.current_weight} lbs</p>
            <h2>Goal Weight</h2>
            <p>{props.goal_weight} lbs</p>
        </div>
    );
}

export {UserDisplayCard}