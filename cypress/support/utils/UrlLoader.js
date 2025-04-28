const urls = {
    dev: "https://dev.saucedemo.com",
    qa: "https://qa.saucedemo.com",
    prod: "https://www.saucedemo.com"
  };
  
  class UrlLoader {
    static getLoginUrl(environment) {
      return urls[environment] || urls["prod"];
    }
  }
  
  export default UrlLoader;
  