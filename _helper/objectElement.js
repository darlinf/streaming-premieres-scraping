const seachButton_HomePage =
  "xpath=//html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]";
const seachInput_HomePage =
  "xpath=//html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input";
const textContent_ResultPage =
  'xpath=//*[@id="plugins-knowledge-verticals-language-pronunciation__onebox_content"]/div[2]/div/div[1]/div[1]/div/div[2]/span[2]/span[1]';

const textContentPronunce_ResultPage =
  'xpath=//*[@id="plugins-knowledge-verticals-language-pronunciation__onebox_content"]/div[2]/div/div[1]/div/div/div[2]';

const seachInput_ResultPage =
  'xpath=//*[@id="tsf"]/div[1]/div[1]/div[2]/div/div[2]/input';
const seachButton_ResultPage =
  'xpath=//*[@id="tsf"]/div[1]/div[1]/div[2]/button';

const changePronunceTypeSelect_ResultPage =
  'xpath=//*[@id="plugins-knowledge-verticals-language-pronunciation__onebox_content"]/div[1]/div/div[2]';
const changePronunceTypeButton_ResultPage =
  'xpath=//*[@id="ow27"]/div[2]/g-menu/g-menu-item[2]/div';

//synopsis object element
const synopsisSpan_ResultPage =
  'xpath=//*[@id="rso"]/div[1]/block-component/div/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div[1]/div/span/span';

//trailer object element
const trailerLink_ResultPage =
  'xpath=//*[@id="rso"]/div[1]/div/video-voyager/div/div/div/div[2]/a';

//backdrop object element
const tapImageLink_ResurtPage = 'xpath=//*[@id="hdtb-msb"]/div[1]/div/div[2]/a';
const imageLink_ResurtPage = 'xpath=//*[@id="islrg"]/div[1]/div[1]/a[1]';
const imageURLLink_ResultPage =
  'xpath=//*[@id="Sva75c"]/div/div/div[3]/div[2]/c-wiz/div/div[1]/div[1]/div[3]/div/a/img';

module.exports = {
  seachButton_HomePage,
  seachInput_HomePage,
  textContent_ResultPage,
  textContentPronunce_ResultPage,
  seachInput_ResultPage,
  seachButton_ResultPage,
  changePronunceTypeSelect_ResultPage,
  changePronunceTypeButton_ResultPage,

  //
  synopsisSpan_ResultPage,

  //
  trailerLink_ResultPage,

  //
  tapImageLink_ResurtPage,
  imageLink_ResurtPage,
  imageURLLink_ResultPage,
};
