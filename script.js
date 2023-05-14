function createSvgElement(dataColor, dataHue, path, condition) {
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.style.position = 'absolute';

  const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement.setAttribute("d", path);
  
  pathElement.style.fill = `hsl(${dataHue}, 45%, ${dataColor - 10}%`;
  pathElement.classList.add(condition.toLowerCase());
  svgElement.appendChild(pathElement);
  
  return svgElement;
}

function createSvgElement2(dataColor, dataHue, path, condition) {
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.style.position = 'absolute';

  const pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement2.setAttribute("d", path);
  
  pathElement2.style.fill = `hsl(${dataHue}, 45%, ${dataColor}%)`;
  
  pathElement2.classList.add(condition.toLowerCase());
  
  svgElement.appendChild(pathElement2);
  
  return svgElement;
}


function createSvgElement3(dataColor, dataHue, path, condition) {
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // svgElement.style.left = '50 px';  // Moved from pathElement3 to svgElement
  svgElement.style.position = 'absolute';

  const pathElement3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement3.setAttribute("d", path);
  
  pathElement3.style.fill = `hsl(${dataHue}, 45%, ${dataColor - 10}%`;
  pathElement3.classList.add(condition.toLowerCase());
  svgElement.appendChild(pathElement3);
  
  return svgElement;
}

function fillColor(condition, filledElement, dataColor, dataHue) {
  filledElement.classList.remove('smooth', 'crunch', 'simple');
  filledElement.classList.add(condition.toLowerCase());

  let svgContent = "";

  if (condition == 'Smooth') {
        svgContent = "M151.379 -41.1511C164.747 -23.5815 154.045 0.0497374 170.827 13.786C195.807 34.2319 221.054 -11.3195 252.574 -5.75373C305.362 3.56733 290.252 84.0697 339.532 104.888C389.874 126.154 426.576 80.303 480.94 87.4979C545.949 96.1017 569.382 141.43 632.281 159.155C687.288 174.656 747.324 127.108 777.927 178.011L778.319 178.664C789.004 196.432 796.946 209.64 793.068 231.442C785.126 276.095 710.562 216.963 687.776 256.117C673.396 280.827 675.128 301.834 681.665 328.855C689.908 362.922 734.266 360.201 735.562 395.842C736.83 430.694 717.337 454.057 689.168 473.208C656.657 495.312 626.277 455.531 593.53 477.192C554.732 502.856 584.033 564.225 546.233 591.681C489.891 632.604 426.912 583.758 393.225 524.789C386.063 512.252 386.961 501.982 378.709 490.296C353.573 454.701 312.867 481.582 272.513 469.194C257.183 464.488 245.4 467.056 233.758 455.638C217.967 440.152 224.603 420.46 220.283 397.442C213.631 361.999 230.363 332.249 209.03 305.259C177.412 265.257 128.705 325.341 80.4014 313.748C41.0412 304.302 -2.48801 308.078 -11.4868 265.561C-14.4336 251.639 -12.4143 242.907 -10.5843 228.439C-2.97126 168.251 81.4241 155.429 71.7172 96.7798C64.9029 55.6076 6.78559 60.4461 7.40187 18.1259C7.72835 -4.29329 14.2331 -17.827 26.5706 -36.6741C37.616 -53.5473 45.6956 -63.8684 63.103 -72.0297C97.7636 -88.2799 128.621 -71.0621 151.379 -41.1511Z"; 
      } else if (condition == 'Crunch') {
        svgContent = "M788.389 496.603L655.439 295.32L827.311 397.898L698.488 257.582L838.024 209.195L681.837 188.897L808.85 132.792L547.87 137.222L553.664 55.6598L505.543 94.4451L430.157 -18.7814L353.665 56.7718L287.347 -54.2056L241.848 61.3131L81.1981 -47.7026L112.233 89.1059L45.6411 95.6431L111.623 178.871L0.386647 278.083L209.768 258.549L210.348 353.22L333.143 275.319L382.627 395.954L435.15 300.622L575.307 443.748L575.693 335.483L788.389 496.603Z";  
      }
  if (svgContent) {
    const svgElement = createSvgElement(dataColor, dataHue, svgContent, condition);
    filledElement.appendChild(svgElement);
  }
}

function fillLine(condition, filledElement, dataColor, dataHue) {
  filledElement.classList.remove('smooth', 'crunch', 'simple');
  filledElement.classList.add(condition.toLowerCase());

  let svgContent = "";


  if (condition == 'Smooth') {
    svgContent = "M164.379 -49.1511C177.747 -31.5815 167.045 -7.95026 183.827 5.786C208.807 26.2319 234.054 -19.3195 265.574 -13.7537C318.362 -4.43267 303.252 76.0697 352.532 96.8875C402.874 118.154 439.576 72.303 493.94 79.4979C558.949 88.1017 582.382 133.43 645.281 151.155C700.288 166.656 760.324 119.108 790.927 170.011L791.319 170.664C802.004 188.432 809.946 201.64 806.068 223.442C798.126 268.095 723.562 208.963 700.776 248.117C686.396 272.827 688.128 293.834 694.665 320.855C702.908 354.922 747.266 352.201 748.562 387.842C749.83 422.694 730.337 446.057 702.168 465.208C669.657 487.312 639.277 447.531 606.53 469.192C567.732 494.856 597.033 556.225 559.233 583.681C502.891 624.604 439.912 575.758 406.225 516.789C399.063 504.252 399.961 493.982 391.709 482.296C366.573 446.701 325.867 473.582 285.513 461.194C270.183 456.488 258.4 459.056 246.758 447.638C230.967 432.152 237.603 412.46 233.283 389.442C226.631 353.999 243.363 324.249 222.03 297.259C190.412 257.257 141.705 317.341 93.4014 305.748C54.0412 296.302 10.512 300.078 1.51317 257.561C-1.43357 243.639 0.585705 234.907 2.41566 220.439C10.0287 160.251 94.4241 147.429 84.7172 88.7798C77.9029 47.6076 19.7856 52.4461 20.4019 10.1259C20.7284 -12.2933 27.2331 -25.827 39.5706 -44.6741C50.616 -61.5473 58.6956 -71.8684 76.103 -80.0297C110.764 -96.2799 141.621 -79.0621 164.379 -49.1511Z"; 
  } else if (condition == 'Crunch') {
    svgContent = "M777.389 496.603L644.439 295.32L816.311 397.898L687.488 257.582L827.024 209.195L670.837 188.897L797.85 132.792L536.87 137.222L542.664 55.6598L494.543 94.4451L419.157 -18.7814L342.665 56.7718L276.347 -54.2056L230.848 61.3131L70.1981 -47.7026L101.233 89.1059L34.6411 95.6431L100.623 178.871L-10.6134 278.083L198.768 258.549L199.348 353.22L322.143 275.319L371.627 395.954L424.15 300.622L564.307 443.748L564.693 335.483L777.389 496.603Z";  
  }

  if (svgContent) {
    const svgElement = createSvgElement2(dataColor, dataHue, svgContent, condition);
    filledElement.appendChild(svgElement);
  }
}



function fillLine2(condition, filledElement, dataColor, dataHue) {
  filledElement.classList.remove('smooth', 'crunch', 'simple');
  filledElement.classList.add(condition.toLowerCase());

  let svgContent = "";

  if (condition == 'Smooth') {
        svgContent = "M175.379 -53.1511C188.747 -35.5815 178.045 -11.9503 194.827 1.786C219.807 22.2319 245.054 -23.3195 276.574 -17.7537C329.362 -8.43267 314.252 72.0697 363.532 92.8875C413.874 114.154 450.576 68.303 504.94 75.4979C569.949 84.1017 593.382 129.43 656.281 147.155C711.288 162.656 771.324 115.108 801.927 166.011L802.319 166.664C813.004 184.432 820.946 197.64 817.068 219.442C809.126 264.095 734.562 204.963 711.776 244.117C697.396 268.827 699.128 289.834 705.665 316.855C713.908 350.922 758.266 348.201 759.562 383.842C760.83 418.694 741.337 442.057 713.168 461.208C680.657 483.312 650.277 443.531 617.53 465.192C578.732 490.856 608.033 552.225 570.233 579.681C513.891 620.604 450.912 571.758 417.225 512.789C410.063 500.252 410.961 489.982 402.709 478.296C377.573 442.701 336.867 469.582 296.513 457.194C281.183 452.488 269.4 455.056 257.758 443.638C241.967 428.152 248.603 408.46 244.283 385.442C237.631 349.999 254.363 320.249 233.03 293.259C201.412 253.257 152.705 313.341 104.401 301.748C65.0412 292.302 21.512 296.078 12.5132 253.561C9.56643 239.639 11.5857 230.907 13.4157 216.439C21.0287 156.251 105.424 143.429 95.7172 84.7798C88.9029 43.6076 30.7856 48.4461 31.4019 6.12591C31.7284 -16.2933 38.2331 -29.827 50.5706 -48.6741C61.616 -65.5473 69.6956 -75.8684 87.103 -84.0297C121.764 -100.28 152.621 -83.0621 175.379 -53.1511Z"; 
      } else if (condition == 'Crunch') {
        svgContent = "M788.389 496.603L655.439 295.32L827.311 397.898L698.488 257.582L838.024 209.195L681.837 188.897L808.85 132.792L547.87 137.222L553.664 55.6598L505.543 94.4451L430.157 -18.7814L353.665 56.7718L287.347 -54.2056L241.848 61.3131L81.1981 -47.7026L112.233 89.1059L45.6411 95.6431L111.623 178.871L0.386647 278.083L209.768 258.549L210.348 353.22L333.143 275.319L382.627 395.954L435.15 300.622L575.307 443.748L575.693 335.483L788.389 496.603Z";  
      }
  if (svgContent) {
    const svgElement = createSvgElement3(dataColor, dataHue, svgContent, condition);
    filledElement.appendChild(svgElement);
  }
}


function fillLine2(condition, filledElement, dataColor, dataHue) {
  filledElement.classList.remove('smooth', 'crunch', 'simple');
  filledElement.classList.add(condition.toLowerCase());

  let svgContent = "";

  if (condition == 'Smooth') {
        svgContent = "M175.379 -53.1511C188.747 -35.5815 178.045 -11.9503 194.827 1.786C219.807 22.2319 245.054 -23.3195 276.574 -17.7537C329.362 -8.43267 314.252 72.0697 363.532 92.8875C413.874 114.154 450.576 68.303 504.94 75.4979C569.949 84.1017 593.382 129.43 656.281 147.155C711.288 162.656 771.324 115.108 801.927 166.011L802.319 166.664C813.004 184.432 820.946 197.64 817.068 219.442C809.126 264.095 734.562 204.963 711.776 244.117C697.396 268.827 699.128 289.834 705.665 316.855C713.908 350.922 758.266 348.201 759.562 383.842C760.83 418.694 741.337 442.057 713.168 461.208C680.657 483.312 650.277 443.531 617.53 465.192C578.732 490.856 608.033 552.225 570.233 579.681C513.891 620.604 450.912 571.758 417.225 512.789C410.063 500.252 410.961 489.982 402.709 478.296C377.573 442.701 336.867 469.582 296.513 457.194C281.183 452.488 269.4 455.056 257.758 443.638C241.967 428.152 248.603 408.46 244.283 385.442C237.631 349.999 254.363 320.249 233.03 293.259C201.412 253.257 152.705 313.341 104.401 301.748C65.0412 292.302 21.512 296.078 12.5132 253.561C9.56643 239.639 11.5857 230.907 13.4157 216.439C21.0287 156.251 105.424 143.429 95.7172 84.7798C88.9029 43.6076 30.7856 48.4461 31.4019 6.12591C31.7284 -16.2933 38.2331 -29.827 50.5706 -48.6741C61.616 -65.5473 69.6956 -75.8684 87.103 -84.0297C121.764 -100.28 152.621 -83.0621 175.379 -53.1511Z"; 
      } else if (condition == 'Crunch') {
        svgContent = "M767.391 506.603L634.44 305.32L806.313 407.898L677.49 267.582L817.026 219.195L660.839 198.897L787.852 142.792L526.872 147.222L532.666 65.6598L484.544 104.445L409.159 -8.78141L332.667 66.7718L266.349 -44.2056L220.85 71.3131L60.2001 -37.7026L91.2348 99.1059L24.643 105.643L90.6253 188.871L-20.6114 288.083L188.77 268.549L189.35 363.22L312.144 285.319L361.629 405.954L414.152 310.622L554.309 453.748L554.695 345.483L767.391 506.603Z";  
      }
  if (svgContent) {
    const svgElement = createSvgElement3(dataColor, dataHue, svgContent, condition);
    filledElement.appendChild(svgElement);
  }
}

let sheetID = "1kWWph2vkIa6UKW4y3IQ85EauEpDwbRumWe1m3RZQcHE";
let tabName = 'Sheet1'
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

fetch(opensheet_uri)
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json()
  })
  .then(data => {
    if (!data) {
      console.error("No data received from server");
      return;
    }

    const barContainer = document.getElementById('barContainer');

    for (let datapoint of data) {
      let dataFlavor = datapoint.flavor_text;
      let dataChoc = datapoint.base_text;
      let dataFilled = datapoint.filling_text;
      let dataTexture = datapoint.filling_line;
      let dataFilling = datapoint.texture_line;
      let dataColor = datapoint.flavor_lightness;
      let dataHue = datapoint.flavor_hue;

      const flavorElement = document.createElement('div');
      flavorElement.classList.add('flavor');
      
      const chocElement = document.createElement('div');
      chocElement.classList.add('choc');
     
      const filledElement = document.createElement('div');
      filledElement.classList.add('filled');

      const filledElementText = document.createElement('div');
      // filledElement.classList.add('filledtext');
      
      const logoImage = document.createElement('img');
      logoImage.classList.add('logo');
      logoImage.src = 'img/logo.png';

      const organicImage = document.createElement('img');
      organicImage.classList.add('organic');
      organicImage.src = 'img/screen-shot-2023-04-01-at-8-43-1-1@2x.png';

      const ozElement = document.createElement('p');
      ozElement.classList.add('oz');
      ozElement.textContent = 'POIDS NET/NET WT. 85G (30 oz)';
     
      const weirdElement = document.createElement('p');
      weirdElement.classList.add('weird');
      weirdElement.textContent = 'No Weird Ingredients. Ever.';

      flavorElement.textContent = dataFlavor;
      chocElement.textContent = dataChoc;
      filledElementText.textContent = dataFilled;
      filledElementText.classList.add("textFilled");


      fillColor(dataTexture, filledElement, dataColor, dataHue);
      fillLine(dataFilling, filledElement, dataColor, dataHue);
      fillLine2(dataFilling, filledElement, dataColor, dataHue);

      let square = document.createElement('div');
      square.id = 'square';

      let chocbar = document.createElement('div');
      chocbar.classList.add('chocbar');
      chocbar.style.backgroundColor = `hsl(${dataHue}, 45%, ${dataColor}%)`;
     
      chocbar.appendChild(filledElementText);
      chocbar.appendChild(flavorElement);
      chocbar.appendChild(chocElement);
      chocbar.appendChild(filledElement);
      chocbar.appendChild(logoImage);
      chocbar.appendChild(organicImage);
      chocbar.appendChild(ozElement);
      chocbar.appendChild(weirdElement);

      barContainer.appendChild(chocbar);
    }
  })
  .catch(err => console.error("Something went wrong!", err));

