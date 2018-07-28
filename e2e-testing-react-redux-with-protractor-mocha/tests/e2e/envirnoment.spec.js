var chai     = require('chai');
var promised = require('chai-as-promised');
chai.use(promised) 
var expect   = chai.expect;

describe('wordsApp', function() {
  
  beforeEach(function(){ browser.get('/') });

  describe('On the Home page', function() {
    it('should have a title in the browser tab', function() {
    
      expect(browser.getTitle()).to.eventually.eq('wordGame');
    });

    it('should have a welcome title', function() {

      var header = element(by.css('h3'));
      expect(header.getText()).to.eventually.eq('Welcome to wordGame');
    });

    it('should display the English keyWord', function() {
      
      var keyWord = element(by.binding('keyWord'));
      expect(keyWord.isPresent()).to.eventually.be.true  
    });

    it('should display the English keyPhrase', function() {
      
      var keyPhrase = element(by.binding('keyPhrase'));
      expect(keyPhrase.isPresent()).to.eventually.be.true; 
    });

    it('should display the possible answers', function() {
      var spanish = element.all(by.repeater('spanish in spanishWords'));
      expect(spanish.count()).to.eventually.eq(3);
    });
  });
});