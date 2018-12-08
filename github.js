class GitHub{

    constructor(){
        this.client_id = 'a7fd87ca88661195d51e';
        this.client_secret = 'ee40652851107fb9cbba83bcbfa8b9f2004f80f2';
        this.repos_count = 3;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            // profile: profile
            profile,
            repos:repos
        }
    }
}


//MikailaAkeredolu