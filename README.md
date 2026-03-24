# Portfolio Main Website

## 1. 프로젝트 소개

- **설명:**  
   미니멀한 패션 브랜드 경험을 GSAP 기반 인터랙션으로 구현한 React 웹사이트
  반응형 웹을 구현하고, GSAP 애니메이션과 인터랙티브한 UI 요소를 활용하여 사용자 경험을 강화했습니다.

- **진행 기간:** 2026.03.20 ~ 2026.03.23 (4일)
- **개발 인원:** 개인 프로젝트
- **배포 링크:** [Portfolio Main](https://hyojunez99.github.io/aer/)
- **GitHub:** [Repository Link](https://github.com/hyojunez99/aer.git)

---

## 2. 사용 기술 스택 (Tech Stack)

- **Frontend** RJavaScript (ES6+), React.js
- **Data Handling:** Mock JSON
- **Style** SCSS, CSS Variables, Flex/Grid Layout
- **Animation** GSAP
- **Design Tools:** Figma
- **Version Control & Tools:** Git, GitHub
- **AI** ChatGTP

---

## 3. 기획 및 디자인 (Planning & Design)

- **컨셉:**
  Modern Minimal / Clean UX / Interactive Portfolio

- **Tool:** Figma
- **주요 활동:**
- 전체 레이아웃 설계 (Header, Footer, Hero, Featured, Collection, About, Cart)
- 반응형 웹 UI 설계 (모바일, 태블릿, 데스크탑)
- UX 개선: GSAP 애니메이션, hover 효과, 스크롤 인터랙션
- 제품/컬렉션 데이터 구조 설계 및 JSON 활용
- AI를 활용한 디자인 피드백, 코드 최적화, 애니메이션 아이디어 제안

---

## 4. 디렉토리 구조

```text
src
│
├── assets                # 정적 리소스 관리
│   ├── data              # 프로젝트 정보, 상품 데이터 등 JSON 데이터
│   ├── images            # UI 이미지 및 콘텐츠 이미지
│   └── scss              # 전역 스타일 (변수, 믹스인, 폰트 설정)
│
├── components            # 재사용 가능한 UI 컴포넌트
│   ├── common            # 버튼, 헤더, 푸터 등 공통 컴포넌트
│   └── home              # 메인 페이지 전용 컴포넌트 (Featured, Intro 등)
│
├── context               # 전역 상태 또는 레이아웃 관련 로직 관리
│
├── pages                 # 라우팅 단위 페이지 컴포넌트 (Home, Detail 등)
│
├── utils
│   └── hooks             # 커스텀 훅 (useGsap 등 로직 분리)
│
├── App.jsx               # 전체 애플리케이션 루트 컴포넌트
│                         # 라우팅 및 페이지 구조 구성
│
└── index.js              # React 앱 진입점

```

---

## 5. 담당 역할

- **기획 및 디자인:** 전체 레이아웃, UI/UX 설계, 반응형 구조 설계, 프로젝트 데이터 구조 설계
- ## **개발:**
- React 기반 페이지 및 컴포넌트 구현
- SCSS 기반 스타일링 및 반응형 구현
- GSAP 애니메이션 적용
- JSON 데이터 기반 제품/컬렉션 화면 구성
- AI를 활용한 코드 리뷰 및 인터랙션 설계

---

## 6. 주요 기능

- Hero, Featured, Collection, About, Cart 페이지 구성
- 제품 상세 페이지 (Detail) 및 장바구니 기능 구현
- GSAP 기반 인터랙션: fade, scale, stagger, scroll-trigger 애니메이션
- 반응형 레이아웃 (모바일 / 태블릿 / 데스크탑)
- JSON 데이터 기반 제품/컬렉션 관리

---

## 7. 트러블 슈팅

- **문제 1:** 반응형 환경에서 컬렉션 레이아웃이 모바일에서 깨지는 현상
  - **해결:** 모바일 환경에 맞춰 레이아웃을 새롭게 설계하고, 기기별로 grid 컬럼 수를 구분해 적용하였다. 또한, flex와 grid를 사용할 때 gap과 wrap 옵션을 명확히 지정하여 다양한 해상도에서도 레이아웃이 안정적으로 유지되도록 개선하였다.

- **문제 2:** 상품 이미지의 비율이 제각각이라 UI가 깨지는 현상이 발생함.
  - **해결:** 이미지 컨테이너에 일정한 비율을 유지하도록 설정하고, 이미지가 영역을 넘길 경우 자연스럽게 잘리도록 처리하여 모든 상품 이미지가 동일한 비율로 보이도록 개선하였음.

- **문제 3:** GSAP 애니메이션이 과도하게 적용되어 스크롤 시 성능 저하가 나타남.
  - **해결:** 애니메이션 적용 대상을 핵심 요소로 한정하고, 스크롤 트리거 사용도 최소화함. 실제 모바일 환경에서 테스트를 거쳐 부드러운 동작을 확인하며 최적화함.

---

## 8. 인사이트 (Insights)

- 포트폴리오 웹사이트는 UI/UX와 브랜드 이미지가 가장 중요하다는 점을 실감함
- React와 GSAP를 활용하면 부드러운 애니메이션과 인터랙션 구현이 가능함
- AI를 활용하면 코드 리뷰, 디자인 피드백, 애니메이션 아이디어를 빠르게 얻을 수 있어 생산성을 높임
- JSON 기반 데이터 관리가 유지보수와 확장성에 큰 도움을 줌
