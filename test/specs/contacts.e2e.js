import {
  initialiseAccessibilityChecking,
  analyseAccessibility,
  generateAccessibilityReports
} from '../utils/accessibility-checking.js'
import HomePage from '../page-objects/home.page.js'

describe('Accessibility Testing - Contacts ', () => {
  it('Should check APHA SDO Contact screen for accessiblity issues', async () => {
    await initialiseAccessibilityChecking()
    await HomePage.open()
    await expect(browser).toHaveTitle(
      'Home | APHA Surveillance data submission portal'
    )
    await analyseAccessibility()

    const contactLink = await HomePage.is_link('Contact')
    contactLink.click()
    await expect(browser).toHaveUrl(expect.stringContaining('contact'))
    await analyseAccessibility()
    generateAccessibilityReports('APHA SDO - Contact screen')
  })
})
