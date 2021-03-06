import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';


describe('providers App', () => {
  let page: AppPage;
  const buttons = element.all(by.css('button'));
  const ordersButton = buttons.get(1);
  const homeButton = buttons.get(2);

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Lazy loading feature modules');
  });

 
  describe('Orders list', function() {
    beforeEach(function() {
      ordersButton.click();
    });

    it('should show orders list when the button is clicked', function() {
        let ordersMessage = element(by.css('app-order-list > p'));
        expect(ordersMessage.getText()).toBe('order-list works!');
    });

  });

});


