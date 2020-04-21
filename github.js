class Github {
    constructor() {
        this.client_id = 'd258cf973e1c8640a19a';
        this.client_secret = 'b701609c005060e3cb570540681bb0b4536a962e';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        };
    }

}