export type Note = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  date: string;
};

export const learningNotes: Note[] = [
  { slug: 'attention-basics', title: 'Attention은 무엇을 바라보는가', category: 'Transformer', summary: 'Attention을 단어 사이의 관계를 살피는 과정으로 이해합니다.', tags: ['Attention', 'Transformer'], date: '2026-08-04' },
  { slug: 'tokenizer-for-beginners', title: 'Tokenizer: 문장을 조각내는 방식', category: 'LLM', summary: 'LLM이 텍스트를 토큰으로 바꾸는 이유와 한계를 정리합니다.', tags: ['Tokenizer', 'LLM'], date: '2026-08-04' },
  { slug: 'ai-safety-for-children', title: 'AI Safety를 어린이에게 설명하기', category: 'AI Education', summary: 'AI 결과를 비판적으로 확인하는 습관을 어린이 눈높이로 설명합니다.', tags: ['AI Safety', '교육'], date: '2026-08-04' },
];

export const courses = [
  { title: 'Machine Learning', learned: '모델이 데이터에서 패턴을 찾는다는 말의 의미와 일반화의 중요성', childExplanation: '여러 장의 동물 사진을 보며 공통점을 찾아 다음 사진을 맞히는 연습에 비유합니다.' },
  { title: 'Transformer & Large Language Models', learned: 'Attention, 토큰화, 사전학습과 미세조정의 관계', childExplanation: '문장 속 단어들이 서로에게 힌트를 주고받으며 다음 말을 고르는 과정으로 설명합니다.' },
  { title: 'Deep Generative Models', learned: '분포를 학습하고 새로운 예시를 생성하는 모델의 기본 관점', childExplanation: '많은 그림을 보고 비슷한 분위기의 새 그림을 그리는 연습으로 비유합니다.' },
];
