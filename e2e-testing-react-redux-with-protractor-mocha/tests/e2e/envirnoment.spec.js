import { browser } from "protractor";

describe("Protractor Demo", () => {

  beforeEach(() => {
    //The code here will get executed before each it block is called  
    browser.get("/");
  });

  it("should display the name of the application", () => {
    /*Expectations accept parameters that will be matched with the real value
    using Jasmine"s matcher functions. eg. toEqual(),toContain(), toBe(), toBeTruthy() etc. */
    expect("Pastebin Application").to.equal("Pastebin Application");

  });

  it("should click the create Paste button", () => {
    //spec goes here

  });
});