const dataToScraping = (dataScraping) => {
  return dataScraping
    .split("\n")
    .map((x) => x.replace(/\t/g, " , ").split(" , "));
};

const convertTrailertURL = (param) => {
  return param.replace("watch?v=", "embed/");
};

const convertDate = (param, year) => {
  let monthNumber = "";

  const month = param[0].split(" ")[1];

  const dayInRaw = param[0].split(" ")[2];

  const day = dayInRaw.length == 2 ? dayInRaw : "0" + dayInRaw;

  switch (month) {
    case "January":
      monthNumber = "01";
      break;
    case "February":
      monthNumber = "02";
      break;
    case "March":
      monthNumber = "03";
      break;
    case "April":
      monthNumber = "04";
      break;
    case "May":
      monthNumber = "05";
      break;
    case "June":
      monthNumber = "06";
      break;
    case "July":
      monthNumber = "07";
    case "August":
      monthNumber = "08";
      break;
    case "September":
      monthNumber = "09";
      break;
    case "October":
      monthNumber = "10";
      break;
    case "November":
      monthNumber = "11";
      break;
    case "December":
      monthNumber = "12";
      break;
  }

  const monthFormat = year + "-" + monthNumber + "-" + day + "T00:00:00.000Z";
  return monthFormat;
};

const fs = require("fs");

function writeFile(content) {
  fs.writeFile("files/test.json", content, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

module.exports = {
  convertDate,
  convertTrailertURL,
  dataToScraping,
  writeFile,
};
