function solution(action) {
    if (action === 'upvote') {
        this.upvotes += 1;
    } else if (action === 'downvote') {
        this.downvotes += 1;
    } else if (action === 'score') {
        let upvotes = this.upvotes;
        let downvotes = this.downvotes;
        
        // Apply obfuscation rules if total votes exceed 50
        let totalVotes = upvotes + downvotes;
        let obfuscationThreshold = 50;
        if (totalVotes > obfuscationThreshold) {
            let obfuscationAmount = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
            upvotes += obfuscationAmount;
            downvotes += obfuscationAmount;
        }
        
        // Calculate score
        let score = upvotes - downvotes;
        
        // Calculate rating
        let rating;
        if (totalVotes < 10) {
            rating = 'new';
        } else if ((this.upvotes / (this.upvotes + this.downvotes)) > 0.66) {
            rating = 'hot';
        } else if (score >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (score < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }
        
        return [upvotes, downvotes, score, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa', 
    upvotes: 101, 
    downvotes: 150 
};

// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score');
// console.log(score); // [127, 127, 0, 'controversial']

solution.call(post, 'downvote'); // (executed 50 times)
score = solution.call(post, 'score');
console.log(score); // [139, 189, -50, 'unpopular']

