import { User } from './User';

export class UserCardCollection {
    constructor(public user_collection: User[]) {}

    create_card_collection() {
        return this.user_collection.map((current_card) =>
            current_card.create_display_card()
        );
    }
}
