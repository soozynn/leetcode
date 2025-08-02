/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(scoreList) {
    const sortedScoreList = [...scoreList].sort((a, b) => b - a);
    const rankMap = new Map();

    for (let i = 0; i < sortedScoreList.length; i++) {
        if (i === 0) rankMap.set(sortedScoreList[i], "Gold Medal");
        else if (i === 1) rankMap.set(sortedScoreList[i], "Silver Medal");
        else if (i === 2) rankMap.set(sortedScoreList[i], "Bronze Medal");
        else rankMap.set(sortedScoreList[i], (i + 1).toString());
    }

    return scoreList.map(s => rankMap.get(s));
};