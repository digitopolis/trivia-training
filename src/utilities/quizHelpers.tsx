export interface IQuestion {
  question: string;
  incorrect: string[];
  correct: string;
}
export function shuffleArray(array: string[]): string[];
export function shuffleArray(array: IQuestion[]): IQuestion[];
export function shuffleArray(
  array: IQuestion[] | string[]
): (IQuestion | string)[] {
  const shuffledArray = [...array];
  for (let index: number = shuffledArray.length - 1; index >= 0; index--) {
    const swap: number = Math.floor(Math.random() * index);
    const temp = shuffledArray[swap];
    shuffledArray[swap] = shuffledArray[index];
    shuffledArray[index] = temp;
  }
  return shuffledArray;
}

export const get10Questions = (questionData: IQuestion[]): IQuestion[] => {
  return questionData.slice(0, 10);
};

export const getScore = (questions: IQuestion[], answers: string[]): number => {
  let score: number = 0;
  questions.map((question, idx) => {
    if (question.correct === answers[idx]) {
      score++;
    }
  });
  return score;
};
