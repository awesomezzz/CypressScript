describe('test_name', function() {

 it('what_it_does', function() {

  // 拜訪google.com
  cy.visit('https://www.google.com/?hl=zh_tw')

  // 輸入框輸入 'YouTube'
  // 並驗證輸入框是否真的有 'YouTube' 這個值
  cy.get('[name=q]')
    .type('YouTube').should('have.value', 'YouTube')

  // 找到搜尋按鈕按下
  cy.get('[name=btnK]').first().click()
  
  // 取得網頁標題 同時驗證應該等於 'YouTube - Google 搜尋'
  cy.title().should('eq', 'YouTube - Google 搜尋')
  
  // 點擊Youtbue
  cy.get('.hlcw0c:nth-child(2) > .g > .jtfYYd > .NJo7tc > .yuRUbf > a > .LC20lb').click()

 })

})