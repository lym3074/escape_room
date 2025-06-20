const { chromium } = require('playwright');
const cron = require('node-cron');

async function reservationStart() {
  // 브라우저 실행 (headless: false로 설정해서 브라우저가 보이도록 함)
  const browser = await chromium.launch({ 
    headless: false,  // 브라우저 창을 보이게 함
    // slowMo: 20     // 동작 사이에 1초 지연을 추가해서 천천히 실행
  });
  
  try {
    const page = await browser.newPage();  
    await page.goto('https://zerohongdae.com/reservation/60');

    console.log(`📄 사이트 접속 완료`);
    
    console.log('⏰ 층간소음 날짜 시간 선택 시작!');
    // 다음 버튼을 구체적으로 지정 (data-action="next" 속성을 가진 요소)
    const searchButton = await page.locator('.datepicker--nav-action[data-action="next"]');
    await searchButton.click();

    const dateBtn = await page.locator('.datepicker--cell.datepicker--cell-day[data-date="5"]')
    await dateBtn.click();

    const themeLabel = await page.locator('label:has(input[value="60"])');
    // await themeLabel.waitFor({ state: 'visible' });
    await themeLabel.click();

    const timeLabel = await page.locator('label:has(input[value="15:00:00"])');
    await timeLabel.click();

    console.log('🎉 날짜, 시간 선택 완료!');

    const nextBtn = await page.locator('#nextBtn');
    await nextBtn.click();
    
    const nameInput = await page.locator('input[name="name"]');
    await nameInput.fill('이용민');

    const phoneInput = await page.locator('input[name="phone"]');
    await phoneInput.fill('01020824590');
    
    // 인원수 선택 (3명)
    const peopleSelect = await page.locator('select[name="people"]');
    await peopleSelect.selectOption('3');

    const policyInput = await page.locator('label:has(input[name="policy"])');
    await policyInput.click();

    console.log(`📄 정보 입력 완료`);
    
    // 예약 버튼 클릭
    // const reservationBtn = await page.locator('#reservationBtn');
    // await reservationBtn.click();

    console.log('🎉 예매 완료!');
    
  } catch (error) {
    console.error('❌ 오류 발생:', error);
  } finally {
    // 브라우저 종료
    // await browser.close();
  }
}

// 스케줄링 설정
console.log('⏰ 예약 봇 스케줄러가 시작되었습니다...');

// 자정(00:00)에 실행
cron.schedule('0 0 * * *', () => {
  console.log('🎯 지정하신 자정입니다. 자동화를 시작합니다...');

  setTimeout(() => {
    reservationStart().catch(console.error);
  }, 10); // 혹시 몰라 10ms 늘림
  
}, {
  timezone: "Asia/Seoul"
});