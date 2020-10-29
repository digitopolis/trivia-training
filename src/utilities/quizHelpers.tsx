export interface Question {
  question: string;
  incorrect: string[];
  correct: string;
}

export const shuffleQuestions = (questionData: Question[]): Question[] => {
  const shuffledArray: Question[] = [...questionData];
  for (let index: number = shuffledArray.length - 1; index >= 0; index--) {
    const swap: number = Math.floor(Math.random() * index);
    const temp = shuffledArray[swap];
    shuffledArray[swap] = shuffledArray[index];
    shuffledArray[index] = temp;
  }
  return shuffledArray;
};

export const get10Questions = (questionData: Question[]): Question[] => {
  return questionData.slice(0, 10);
};
