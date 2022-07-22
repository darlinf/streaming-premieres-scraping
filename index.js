const { dataToSeach } = require("./_helper/dataToSeach");
const { chromium } = require("playwright-chromium");

const {
  seachInput_HomePage,
  seachButton_HomePage,
  synopsisSpan_ResultPage,
  trailerLink_ResultPage,
  tapImageLink_ResurtPage,
  imageLink_ResurtPage,
  imageURLLink_ResultPage,
} = require("./_helper/objectElement");

const {
  convertDate,
  convertTrailertURL,
  dataToScraping,
  writeFile,
} = require("./_helper/dataModeling");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const index = 125;
  const dataTo = dataToScraping(dataToSeach);
  const date = convertDate(dataTo[index], "2022");
  const nameToSearch = dataTo[index][1];
  const streamingNameService = dataTo[index][2];

  try {
  } catch (error) {}
  let contentSynopsis = "";
  let contentTrailerURL = "";
  let imageBackdropURL = "";
  let imagePosterURL = "";

  const heapScraping = async (searchStr) => {
    await page.goto("https://www.google.com");
    await page.fill(seachInput_HomePage, nameToSearch + " " + searchStr);
    await page.click(seachButton_HomePage);
  };

  const getImageURL = async () => {
    let url = await page.evaluate(() => {
      function getElementByXpath(path) {
        return document.evaluate(
          path,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue.src;
      }

      return getElementByXpath(
        '//*[@id="Sva75c"]/div/div/div[3]/div[2]/c-wiz/div/div[1]/div[1]/div[3]/div/a/img'
      );
    });
    return url;
  };

  try {
    //Get synopsis
    await heapScraping("synopsis");
    contentSynopsis = await page.textContent(synopsisSpan_ResultPage);
  } catch (error) {
    contentSynopsis = "";
  }

  try {
    //Get trailer URL
    await heapScraping("trailer");
    await page.click(trailerLink_ResultPage);
    contentTrailerURL = page.url();
  } catch (error) {
    contentTrailerURL = "";
  }

  try {
    //Get backdrop image
    await heapScraping("backdrop 1080p");
    await page.click(tapImageLink_ResurtPage);
    await page.click(imageLink_ResurtPage);
    imageBackdropURL = await getImageURL();
  } catch (error) {
    imageBackdropURL = "";
  }

  try {
    //Get poster image
    await heapScraping("poster");
    await page.click(tapImageLink_ResurtPage);
    await page.click(imageLink_ResurtPage);
    imagePosterURL = await getImageURL();
  } catch (error) {
    imagePosterURL = "";
  }

  const dataResurt = {
    date: date,
    name: nameToSearch,
    imageURL: imagePosterURL,
    backgroundImageURL: imageBackdropURL,
    trailer: convertTrailertURL(contentTrailerURL),
    description: contentSynopsis,
    streamingService: streamingNameService,
  };

  console.log(dataResurt);

  await browser.close();
})();

const word = "Chapter Introduction Welcome to the first css";

const wordToSeach = [...new Set(word.toLowerCase().split(" "))];

//writeFile(JSON.stringify(dataResurt));

////////

/*await page.textContent(textContent_ResultPage);

  let pronounces = [];

  for (var i = 0; i < wordToSeach.length; i++) {
    await page.fill(
      seachInput_ResultPage,
      "how to pronounce " + wordToSeach[i]
    );

    await page.click(seachButton_ResultPage);

    try {
      await page
        .locator(changePronunceTypeSelect_ResultPage)
        .click({ timeout: 4000 });
      await page.click(changePronunceTypeButton_ResultPage);

      const content = await page.textContent(textContentPronunce_ResultPage);

      pronounces.push({
        word: wordToSeach[i],
        pronounce: content,
      });
    } catch (error) {
      pronounces.push({
        word: wordToSeach[i],
        pronounce: "",
      });
    }

    /*await page.screenshot({
      path: `screenshot/  ${Math.random(10)} - ${wordToSeach[i]} .png`,
    });
  }*/

// writeFile(JSON.stringify(pronounces));
