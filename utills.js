export function checkForYes(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'y';
}
export function checkForNo(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'n';
}