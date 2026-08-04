export type Locale = 'ko' | 'en';

export const site = {
  name: 'AI를 이해하고 설명하는 사람',
  description: 'LLM의 원리를 깊이 이해하고 어린이와 청소년이 AI를 올바르게 이해하도록 돕는 교육자 포트폴리오.',
  url: 'https://example.com',
  email: 'hello@example.com',
  github: 'https://github.com/',
  linkedin: '',
};

export const navItems = [
  { href: '/', label: '홈' },
  { href: '/about', label: '소개' },
  { href: '/learning', label: '학습 노트' },
  { href: '/courses', label: '수강 및 학습' },
  { href: '/research', label: '연구' },
  { href: '/education', label: 'AI 교육' },
  { href: '/projects', label: '프로젝트' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: '연락처' },
];

export const home = {
  eyebrow: 'Exploring LLMs. Building AI education for the next generation.',
  title: 'Understanding AI deeply.\nTeaching AI clearly.',
  intro: 'LLM을 깊이 이해하고,\n그 이해를 어린이와 청소년도 쉽게 배울 수 있도록\n교육 콘텐츠를 만들고 있습니다.',
  focus: [
    'Transformer와 LLM의 작동 원리를 기초부터 이해하기',
    'Tokenizer, Embedding, Attention을 쉬운 비유와 예시로 설명하기',
    'AI 리터러시와 안전한 활용을 어린이 눈높이에 맞게 설계하기',
  ],
};

export const featuredNotes = [
  { title: 'Attention은 무엇을 바라보는가', slug: 'attention-basics', summary: '문장 속 단어들이 서로의 관계를 계산하는 방식을 쉬운 예시로 정리합니다.', tags: ['Transformer', 'Attention'] },
  { title: 'Tokenizer: 문장을 조각내는 방식', slug: 'tokenizer-for-beginners', summary: 'LLM이 문장을 그대로 읽지 않고 토큰 단위로 다루는 이유를 설명합니다.', tags: ['LLM', 'Tokenizer'] },
  { title: 'AI Safety를 어린이에게 설명하기', slug: 'ai-safety-for-children', summary: 'AI를 무조건 믿지 않고 질문하며 사용하는 태도를 교육 관점에서 정리합니다.', tags: ['AI Safety', '교육'] },
];

export const projects = [
  { title: '작은 Transformer 구현 노트', status: '진행 중', description: 'LLM의 기본 구성요소를 직접 구현하며 원리를 검증하는 학습 프로젝트입니다.', tech: ['TypeScript', 'Python', 'PyTorch'], link: 'https://github.com/' },
  { title: 'KCI 초록 언어 데이터 분석', status: '정리 중', description: '학술 초록의 언어적 특징을 분석하고 시각화하는 연구 기반 프로젝트입니다.', tech: ['Python', 'NLP', 'Visualization'], link: 'https://github.com/' },
];

export const cv = [
  { year: '2026–', title: 'AI 교육 콘텐츠 설계', detail: '어린이와 청소년을 위한 AI 리터러시 수업 자료 준비' },
  { year: '2025', title: 'LLM 및 딥러닝 학습', detail: 'Transformer, 생성모델, 최적화, 딥러닝 기초 정리' },
  { year: '2024', title: '언어 데이터 분석 연구', detail: 'KCI 초록 및 학술 텍스트 분석 프로젝트 수행' },
];
