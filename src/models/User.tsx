import { UserDisplayCard } from '../components/UserDisplayCard/UserDisplayCard';

export class User {
    static id: number = 0;
    public user_id: number;
    constructor(
        public name: string,
        public current_weight: number,
        public goal_weight: number,
        public image_url: string,
    ) {
        this.user_id = User.id;
        User.id++;
    }

    create_display_card(){
        return <UserDisplayCard
                    key={this.user_id}
                    name={this.name}
                    current_weight={this.current_weight}
                    goal_weight={this.goal_weight}
                    image_url={this.image_url}
                />
    }
}


