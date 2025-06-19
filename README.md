# Naver Automation with Playwright

Playwright를 사용해서 네이버 사이트에 자동으로 접속하는 JavaScript 프로젝트입니다.

## 🚀 빠른 시작

### 1. 의존성 설치
```bash
npm install
```

### 2. Playwright 브라우저 설치
```bash
npm run install-browsers
```

### 3. 프로젝트 실행
```bash
npm start
```

## 📁 프로젝트 구조

- `index.js` - 메인 실행 파일 (네이버 접속 자동화)
- `package.json` - 프로젝트 설정 및 의존성
- `playwright.config.js` - Playwright 설정 파일

## ✨ 기능

- ✅ 네이버 사이트 자동 접속
- ✅ 브라우저 창이 보이도록 설정 (headless: false)
- ✅ 천천히 실행되도록 지연 설정
- ✅ 페이지 제목 출력
- ✅ 자동 브라우저 종료

## 🛠️ 커스터마이징

`index.js` 파일을 수정해서 원하는 동작을 추가할 수 있습니다:

- 다른 사이트로 이동
- 요소 클릭
- 텍스트 입력
- 스크린샷 캡처