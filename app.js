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
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe' });
    var page = await browser.newPage();
    await page.goto('https://www.zalando.it/donna-home/');
    await page.setViewport({width: 1080, height: 1024});

    await page.type('.z-navicat-header_searchInput', 'scarpe nike');  
    await page.keyboard.press("Enter"); 

    const filtroButton = "button.J1Rmt-._6-WsK3.Md_Vex.Nk_Omi._MmCDa._0xLoFW.FCIprz.NN8L-8._2kjxJ6.FxZV-M._7Nzrmq.LyRfpJ.K82if3.heWLCX.mo6ZnF._4F506m";
   
    await page.waitForSelector(filtroButton);

    await page.click(filtroButton);

    await page.click(filtroButton);

    const selector = ".ks8JjI.r9BRio.qXofat.ZkIJC-.pMa0tB.JCuRr_";

    await page.waitForSelector(selector); 
// Ottieni tutti gli elementi che corrispondono al selettore
const elements = await page.$$(selector);

// Controlla che ci siano almeno 5 elementi
if(elements.length >= 5){
  // Fai click sul quinto elemento
  await elements[4].click();
}else{
  console.log('Non ci sono abbastanza elementi che corrispondono al selettore');
}


    
    const searchResultSelector = '._5qdMrS.w8MdNG.cYylcv.BaerYO._75qWlu.iOzucJ.JT3_zV._Qe9k6';
    await page.waitForSelector(searchResultSelector); 

    const products = await page.$$(searchResultSelector); 
var x = 0; 

    for(let product of products){
  
        const sneaker = await page.evaluate(el => {
          if(el.querySelector(".KxHAYs.lystZ1.FxZV-M._4F506m.ZkIJC-.r9BRio.qXofat.EKabf7.nBq1-s._2MyPg2") == null)
        return null;

            const title = el.querySelector(".KxHAYs.lystZ1.FxZV-M._4F506m.ZkIJC-.r9BRio.qXofat.EKabf7.nBq1-s._2MyPg2").textContent;
   
            const price = el.querySelector("section._0xLoFW._78xIQ-").textContent;

            const brand = el.querySelector("h3._6zR8Lt.lystZ1.FxZV-M._4F506m.ZkIJC-.r9BRio.qXofat.EKabf7.nBq1-s._2MyPg2").textContent;

            return ({title, price, brand}) 
   
        },product);

        if(sneaker == null) {console.log("NULLA");x++;}

        else{
        console.log(sneaker);
        x++; }
      }
      console.log(x);  
       
})();

//button.J1Rmt-._6-WsK3.Md_Vex.Nk_Omi._MmCDa._0xLoFW.FCIprz.NN8L-8._2kjxJ6.FxZV-M._7Nzrmq.LyRfpJ.K82if3.heWLCX.mo6ZnF._4F506m > span.ODGSbs._99qBVG.gaJRiA.BaerYO.JCuRr_.KxHAYs._2kjxJ6.FxZV-M