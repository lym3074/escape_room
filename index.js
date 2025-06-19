const { chromium } = require('playwright');

async function main() {
  console.log('🚀 Playwright 브라우저 자동화를 시작합니다...');
  
  // 브라우저 실행 (headless: false로 설정해서 브라우저가 보이도록 함)
  const browser = await chromium.launch({ 
    headless: false,  // 브라우저 창을 보이게 함
    slowMo: 1000      // 동작 사이에 1초 지연을 추가해서 천천히 실행
  });
  
  try {
    const page = await browser.newPage();  
    await page.goto('https://zerohongdae.com/reservation/60');
    
    // 페이지 제목 출력
    const title = await page.title();
    console.log(`📄 페이지 제목: ${title}`);
    
    // 5초간 대기 (사이트를 볼 수 있도록)
    console.log('⏰  5초간 대기 중...');
    // await page.waitForTimeout(5000);
    
    console.log('🎉 자동화 완료!');
    
  } catch (error) {
    console.error('❌ 오류 발생:', error);
  } finally {
    // 브라우저 종료
    // await browser.close();
    console.log('🔚 브라우저를 종료합니다.');
  }
}

// 스크립트 실행
main().catch(console.error); 