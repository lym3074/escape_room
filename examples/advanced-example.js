const { chromium } = require('playwright');

async function advancedNaverExample() {
  console.log('🚀 고급 네이버 자동화 예제를 시작합니다...');
  
  const browser = await chromium.launch({ 
    headless: false,
    slowMo: 500
  });
  
  try {
    const page = await browser.newPage();
    
    // 네이버 메인 페이지로 이동
    console.log('📱 네이버 메인 페이지로 이동...');
    await page.goto('https://www.naver.com');
    
    // 검색창 찾기 및 검색어 입력
    console.log('🔍 검색창에 "Playwright" 입력...');
    const searchBox = await page.locator('input[name="query"]');
    await searchBox.fill('Playwright');
    
    // 검색 버튼 클릭
    console.log('🔍 검색 버튼 클릭...');
    const searchButton = await page.locator('button.btn_search');
    await searchButton.click();
    
    // 페이지 로딩 대기
    await page.waitForLoadState('networkidle');
    
    // 검색 결과 확인
    console.log('📊 검색 결과 확인 중...');
    const results = await page.locator('.result_item').count();
    console.log(`✅ 검색 결과: ${results}개 항목 발견`);
    
    // 스크린샷 저장
    console.log('📸 스크린샷 저장...');
    await page.screenshot({ path: 'naver-search-result.png' });
    
    // 5초간 결과 보기
    console.log('⏰ 5초간 결과 확인...');
    await page.waitForTimeout(5000);
    
    console.log('🎉 고급 자동화 완료!');
    
  } catch (error) {
    console.error('❌ 오류 발생:', error);
  } finally {
    await browser.close();
    console.log('🔚 브라우저 종료');
  }
}

// 실행
advancedNaverExample().catch(console.error); 