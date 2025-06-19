// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  
  /* 병렬 실행을 비활성화하여 안정적인 실행 */
  fullyParallel: false,
  
  /* 실패한 테스트를 재시도하지 않음 */
  retries: 0,
  
  /* CI에서는 병렬 실행 비활성화 */
  workers: 1,
  
  /* 리포터 설정 */
  reporter: 'html',
  
  /* 모든 테스트에 공통으로 적용할 설정 */
  use: {
    /* 실행 추적을 위한 설정 */
    trace: 'on-first-retry',
    
    /* 스크린샷 설정 */
    screenshot: 'only-on-failure',
    
    /* 비디오 녹화 설정 */
    video: 'retain-on-failure',
  },

  /* 다양한 브라우저에서 테스트하기 위한 프로젝트 설정 */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
}); 