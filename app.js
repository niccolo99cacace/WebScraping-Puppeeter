const express = require("express");
const morgan = require("morgan");

//libreria per svolgere il web scraping
const puppeteer = require('puppeteer');

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.listen(8000, () => { 
    console.log("the port is listening on port 8000");
  });


/*
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    await page.goto('https://developer.chrome.com/');
  
    // Set screen size
    await page.setViewport({width: 1080, height: 1024});
  
    // Type into search box
    await page.type('.search-box__input', 'automate beyond recorder');
  
    // Wait and click on first result
    const searchResultSelector = '.search-box__link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
  
    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
      'text/Customize and automate'
    );
    const fullTitle = await textSelector.evaluate(el => el.textContent);
  
    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);
  
    await browser.close();
  })();

  */

 

  (async () => {

    //apro il browser con tanto di interfaccia grafica (headless: false)
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe' });
    const page = await browser.newPage();
  
    //cerco il seguente URL nel browser
    await page.goto('https://www.zalando.it/donna-home/'); 
  
    //indico la grandezza dell'interfaccia grafica 
    //anche se l'interfaccia grafica fosse non visibile è importante definirne la grandezza poichè , 
    //,in base al layout, alcuni dati potrebbero essere disponibili e altri no 
    await page.setViewport({width: 1080, height: 1024});

     await page.type('.z-navicat-header_searchInput', 'scarpe nike'); 
     
     await page.keyboard.press("Enter");

     
     const searchResultSelector = '.KxHAYs.lystZ1.FxZV-M._4F506m.ZkIJC-.r9BRio.qXofat.EKabf7.nBq1-s._2MyPg2';
     await page.waitForSelector(searchResultSelector);


     //await page.click(searchResultSelector);
     
     //raccoglie tutti gli elementi specificati dal selettore preso come parametro 
     const product = await page.$(searchResultSelector);

     await product.click();

     
     await page.waitForSelector('._5qdMrS.VHXqc_.rceRmQ._4NtqZU.mIlIve');
     const product1 = await page.$('._5qdMrS.VHXqc_.rceRmQ._4NtqZU.mIlIve');


     const sneaker = await page.evaluate(el => {
      const title = el.querySelector(".EKabf7.R_QwOV").textContent;
      console.log(title);
      const price = el.querySelector(".KxHAYs._4sa1cA.FxZV-M._4F506m").textContent;
      console.log(price);
      const brand = el.querySelector("._6zR8Lt.gr9aYh.FxZV-M._4F506m._5Yd-hZ").textContent;
      console.log(brand);

      return ({title,price,brand})

},product1);


     console.log(sneaker);

  })(); 
