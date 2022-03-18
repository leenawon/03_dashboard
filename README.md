## 배포 주소

<a href="https://gilpop8663.github.io/03_dashboard/">대시보드 페이지</a>

## 💻 설치 방법
```
npm install
npm run dev
```

## 📂 파일 구조
```
src  
 ┣ assets  
 ┃ ┣ images  
 ┃ ┃ ┣ colorlogo.png  
 ┃ ┃ ┣ gray_arrow.png  
 ┃ ┃ ┣ index.tsx  
 ┃ ┃ ┣ logo.png  
 ┃ ┃ ┣ menu.png  
 ┃ ┃ ┣ refresh.png  
 ┃ ┃ ┣ vector.png  
 ┃ ┃ ┣ vector2.png  
 ┃ ┃ ┗ white_arrow.png  
 ┃ ┗ styles  
 ┃ ┃ ┣ CardStyle.ts  
 ┃ ┃ ┣ DashboardStyle.ts  
 ┃ ┃ ┣ GlobalStyle.ts  
 ┃ ┃ ┣ HeaderStyle.ts  
 ┃ ┃ ┣ ModalStyle.ts  
 ┃ ┃ ┣ NavStyle.ts  
 ┃ ┃ ┣ Theme.ts  
 ┃ ┃ ┣ index.ts  
 ┃ ┃ ┗ styled.d.ts  
 ┣ components  
 ┃ ┣ Card.tsx  
 ┃ ┣ Header.tsx  
 ┃ ┣ Material.ts  
 ┃ ┣ Menu.tsx  
 ┃ ┣ Method.ts  
 ┃ ┣ Modal.tsx  
 ┃ ┣ Nav.tsx  
 ┃ ┣ NoResults.tsx  
 ┃ ┣ Toggle.tsx  
 ┃ ┣ index.tsx  
 ┃ ┗ type.ts  
 ┣ hooks  
 ┃ ┣ index.tsx  
 ┃ ┗ useRequestApi.tsx  
 ┣ pages  
 ┃ ┗ dashboard  
 ┃ ┃ ┣ components  
 ┃ ┃ ┗ Dashboard.tsx  
 ┣ utils  
 ┃ ┣ HttpUtil.tsx  
 ┃ ┗ index.tsx  
 ┣ App.tsx  
 ┗ index.tsx
```

## 📝 기능

### 대시보드 페이지 HTML 구조 작업

- 대시보드 페이지의 기본 HTML 구조 설계
- 여섯 개의 견적 요청 카드는 컴포넌트로 분리해 각각의 카드에 해당하는 데이터를 화면에 보여줄 수 있도록 작업

### 대시보드 페이지 기본 스타일 적용

- 주어진 Figma 파일을 토대로 페이지의 스타일 적용

### API 요청 custom hooks로 구현

- parameters가 바뀔 때 마다 API 요청 하도록 설계
- axios 라이브러리 활용

### 가공 방식 필터가 선택될 경우 해당 조건의 카드 출력

- 재료 필터 선택될 경우 해당 조건이 포함된 카드 모두 출력
- 가공 방식과 재료 필터가 둘 다 선택되면 두 조건의 교집합 출력
- 필터링 리셋 누르면 전체 필터 선택 해제

### 대시보드 결과물 없을 때 사용자에게 알림

- 대시보드 필터에서 조건에 맞는 게시글이 없을 때 사용자에게 해당하는 데이터가 없다고 알려줌

### 모달 컴포넌트

- useState 를 사용하여 state 값에 따라 열리고 닫히는 모달창 구현
- 아이콘 클릭 시 백그라운드가 어두워지고 메뉴화면이 좌측에서 등장하도록 구현
- 백그라운드 클릭 시 닫히도록 구현
- 모달창 활성화 시 스크롤이 동작하지 않도록 구현

### 반응형 컴포넌트

- Media query 를 사용하여 지정한 width 값 미만 일 때 styled-component 속성을 변경하여 반응형 구현


## 📋개발 진행 상황 공유

<img width="952" alt="스크린샷 2022-02-09 오전 2 42 19" src="https://user-images.githubusercontent.com/91244500/153044840-4b2231bb-2323-4086-aad8-377874414505.png">

### 프로젝트 과정 소개

| 슬랙을 이용한 소통                                                                                                             |                                                       게더를 활용한 소통                                                       |
| :----------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: |
| <img width="auto" src="https://user-images.githubusercontent.com/80146176/153052997-f2ca6637-40f8-4e7f-9609-f4885577706a.png"> | <img width="auto" src="https://user-images.githubusercontent.com/80146176/153053947-7be40938-62f8-4dd9-a54b-7328ea550546.png"> |
| 노션에서의 소통                                                                                                                |                                                     화면공유를 활용한 소통                                                     |
| <img width="auto" src="https://user-images.githubusercontent.com/80146176/153054588-6194940a-a76d-4fde-a164-2efb3989d6e8.png"> | <img width="auto" src="https://user-images.githubusercontent.com/80146176/153054110-d7c4169e-3824-4903-8ca5-fc4aec044055.png"> |

