function createSvgElement(dataColor, dataHue, dataSat, dataVegan, path, condition) {
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.style.position = 'absolute';

  const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement.setAttribute("d", path);
  
  if (dataVegan === "Black") {
    pathElement.style.fill = `hsl(${dataHue}, ${dataSat}%, ${dataColor - 10}%)`;
  } else if (dataVegan === "White") {
    pathElement.style.fill = `hsl(${dataHue}, ${dataSat}%, ${dataColor}%)`;
  }
  
  pathElement.classList.add(condition.toLowerCase());
  svgElement.appendChild(pathElement);
  
  return svgElement;
}

function createSvgElement2(dataColor, dataHue, dataSat, path, condition) {
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.style.position = 'absolute';

  const pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement2.setAttribute("d", path);
  
  pathElement2.style.fill = `hsl(${dataHue}, ${dataSat}%, ${dataColor - 25}%)`;
  
  pathElement2.classList.add(condition.toLowerCase());
  
  svgElement.appendChild(pathElement2);
  
  return svgElement;
}

function createSvgElement3(dataColor, dataHue, dataSat, dataVegan, path, condition) {
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.style.position = 'absolute';

  const pathElement3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement3.setAttribute("d", path);
  
  if (dataVegan === "Black") {
    pathElement3.style.fill = `hsl(${dataHue}, ${dataSat}%, ${dataColor - 10}%)`; 
  } else if (dataVegan === "White") {
    pathElement3.style.fill = `hsl(${dataHue}, ${dataSat}%, ${dataColor}%)`;
  }
  
  pathElement3.classList.add(condition.toLowerCase());
  svgElement.appendChild(pathElement3);
  
  return svgElement;
}


function fillColor(condition, filledElement, dataColor, dataHue, dataSat, dataVegan) {
  filledElement.classList.remove('smooth', 'crunch', 'simple');
  filledElement.classList.add(condition.toLowerCase());

  let svgContent = "";

  if (condition == 'Smooth') {
        svgContent = "M151.379 -41.1511C164.747 -23.5815 154.045 0.0497374 170.827 13.786C195.807 34.2319 221.054 -11.3195 252.574 -5.75373C305.362 3.56733 290.252 84.0697 339.532 104.888C389.874 126.154 426.576 80.303 480.94 87.4979C545.949 96.1017 569.382 141.43 632.281 159.155C687.288 174.656 747.324 127.108 777.927 178.011L778.319 178.664C789.004 196.432 796.946 209.64 793.068 231.442C785.126 276.095 710.562 216.963 687.776 256.117C673.396 280.827 675.128 301.834 681.665 328.855C689.908 362.922 734.266 360.201 735.562 395.842C736.83 430.694 717.337 454.057 689.168 473.208C656.657 495.312 626.277 455.531 593.53 477.192C554.732 502.856 584.033 564.225 546.233 591.681C489.891 632.604 426.912 583.758 393.225 524.789C386.063 512.252 386.961 501.982 378.709 490.296C353.573 454.701 312.867 481.582 272.513 469.194C257.183 464.488 245.4 467.056 233.758 455.638C217.967 440.152 224.603 420.46 220.283 397.442C213.631 361.999 230.363 332.249 209.03 305.259C177.412 265.257 128.705 325.341 80.4014 313.748C41.0412 304.302 -2.48801 308.078 -11.4868 265.561C-14.4336 251.639 -12.4143 242.907 -10.5843 228.439C-2.97126 168.251 81.4241 155.429 71.7172 96.7798C64.9029 55.6076 6.78559 60.4461 7.40187 18.1259C7.72835 -4.29329 14.2331 -17.827 26.5706 -36.6741C37.616 -53.5473 45.6956 -63.8684 63.103 -72.0297C97.7636 -88.2799 128.621 -71.0621 151.379 -41.1511Z"; 
      } else if (condition == 'Crunch') {
        svgContent = "M776.391 506.603L643.44 305.32L815.313 407.898L686.49 267.582L826.026 219.195L669.839 198.897L796.852 142.792L535.872 147.222L541.666 65.6598L493.544 104.445L418.159 -8.78141L341.667 66.7718L275.349 -44.2056L229.85 71.3131L69.2001 -37.7026L100.235 99.1059L33.643 105.643L99.6253 188.871L-11.6114 288.083L197.77 268.549L198.35 363.22L321.144 285.319L370.629 405.954L423.152 310.622L563.309 453.748L563.695 345.483L776.391 506.603Z";  
      }
      
      if (dataVegan === "Black") {
        filledElement.style.backgroundColor = `hsl(${dataHue}, ${dataSat}%, ${dataColor - 5}%)`;
      } else if (dataVegan === "White") {
        filledElement.style.backgroundColor = `hsl(${dataHue}, ${dataSat}%, ${dataColor}%)`;
      }
      
      const svgElement = createSvgElement(dataColor, dataHue, dataSat, dataVegan, svgContent, condition);
      filledElement.appendChild(svgElement);
    }
  

    function fillLine(condition, filledElement, dataColor, dataHue, dataSat) {
      filledElement.classList.remove('smooth', 'crunch', 'simple');
      filledElement.classList.add(condition.toLowerCase());
    
      let svgContent = "";
    
    
      if (condition == 'Smooth') {
        svgContent = "M164.379 -45.1511C177.747 -27.5815 167.045 -3.95026 183.827 9.786C208.807 30.2319 234.054 -15.3195 265.574 -9.75373C318.362 -0.432675 303.252 80.0697 352.532 100.888C402.874 122.154 439.576 76.303 493.94 83.4979C558.949 92.1017 582.382 137.43 645.281 155.155C700.288 170.656 760.324 123.108 790.927 174.011L791.319 174.664C802.004 192.432 809.946 205.64 806.068 227.442C798.126 272.095 723.562 212.963 700.776 252.117C686.396 276.827 688.128 297.834 694.665 324.855C702.908 358.922 747.266 356.201 748.562 391.842C749.83 426.694 730.337 450.057 702.168 469.208C669.657 491.312 639.277 451.531 606.53 473.192C567.732 498.856 597.033 560.225 559.233 587.681C502.891 628.604 439.912 579.758 406.225 520.789C399.063 508.252 399.961 497.982 391.709 486.296C366.573 450.701 325.867 477.582 285.513 465.194C270.183 460.488 258.4 463.056 246.758 451.638C230.967 436.152 237.603 416.46 233.283 393.442C226.631 357.999 243.363 328.249 222.03 301.259C190.412 261.257 141.705 321.341 93.4014 309.748C54.0412 300.302 10.512 304.078 1.51317 261.561C-1.43357 247.639 0.585705 238.907 2.41566 224.439C10.0287 164.251 94.4241 151.429 84.7172 92.7798C77.9029 51.6076 19.7856 56.4461 20.4019 14.1259C20.7284 -8.29329 27.2331 -21.827 39.5706 -40.6741C50.616 -57.5473 58.6956 -67.8684 76.103 -76.0297C110.764 -92.2799 141.621 -75.0621 164.379 -45.1511Z"; 
      } else if (condition == 'Crunch') {
        svgContent = "M783.389 497.603L650.439 296.32L822.311 398.898L693.488 258.582L833.024 210.195L676.837 189.897L803.85 133.792L542.87 138.222L548.664 56.6598L500.543 95.4451L425.157 -17.7814L348.665 57.7718L282.347 -53.2056L236.848 62.3131L76.1981 -46.7026L107.233 90.1059L40.6411 96.6431L106.623 179.871L-4.61335 279.083L204.768 259.549L205.348 354.22L328.143 276.319L377.627 396.954L430.15 301.622L570.307 444.748L570.693 336.483L783.389 497.603Z";  
      }
    
      if (svgContent) {
        const svgElement = createSvgElement2(dataColor, dataHue,  dataSat, svgContent, condition);
        filledElement.appendChild(svgElement);
      }
    }



function fillLine2(condition, filledElement, dataColor, dataHue, dataSat, dataVegan) {
  filledElement.classList.remove('smooth', 'crunch', 'simple');
  filledElement.classList.add(condition.toLowerCase());

  let svgContent = "";

   if (condition == 'Smooth') {
    svgContent = "M164.379 -49.1511C177.747 -31.5815 167.045 -7.95026 183.827 5.786C208.807 26.2319 234.054 -19.3195 265.574 -13.7537C318.362 -4.43267 303.252 76.0697 352.532 96.8875C402.874 118.154 439.576 72.303 493.94 79.4979C558.949 88.1017 582.382 133.43 645.281 151.155C700.288 166.656 760.324 119.108 790.927 170.011L791.319 170.664C802.004 188.432 809.946 201.64 806.068 223.442C798.126 268.095 723.562 208.963 700.776 248.117C686.396 272.827 688.128 293.834 694.665 320.855C702.908 354.922 747.266 352.201 748.562 387.842C749.83 422.694 730.337 446.057 702.168 465.208C669.657 487.312 639.277 447.531 606.53 469.192C567.732 494.856 597.033 556.225 559.233 583.681C502.891 624.604 439.912 575.758 406.225 516.789C399.063 504.252 399.961 493.982 391.709 482.296C366.573 446.701 325.867 473.582 285.513 461.194C270.183 456.488 258.4 459.056 246.758 447.638C230.967 432.152 237.603 412.46 233.283 389.442C226.631 353.999 243.363 324.249 222.03 297.259C190.412 257.257 141.705 317.341 93.4014 305.748C54.0412 296.302 10.512 300.078 1.51317 257.561C-1.43357 243.639 0.585705 234.907 2.41566 220.439C10.0287 160.251 94.4241 147.429 84.7172 88.7798C77.9029 47.6076 19.7856 52.4461 20.4019 10.1259C20.7284 -12.2933 27.2331 -25.827 39.5706 -44.6741C50.616 -61.5473 58.6956 -71.8684 76.103 -80.0297C110.764 -96.2799 141.621 -79.0621 164.379 -49.1511Z"; 
  } else if (condition == 'Crunch') {
    svgContent = "M788.389 496.603L655.439 295.32L827.311 397.898L698.488 257.582L838.024 209.195L681.837 188.897L808.85 132.792L547.87 137.222L553.664 55.6598L505.543 94.4451L430.157 -18.7814L353.665 56.7718L287.347 -54.2056L241.848 61.3131L81.1981 -47.7026L112.233 89.1059L45.6411 95.6431L111.623 178.871L0.386647 278.083L209.768 258.549L210.348 353.22L333.143 275.319L382.627 395.954L435.15 300.622L575.307 443.748L575.693 335.483L788.389 496.603Z";  
  }

  if (dataVegan === "Black") {
    filledElement.style.backgroundColor = `hsl(${dataHue}, ${dataSat}%, ${dataColor - 5}%)`;
  } else if (dataVegan === "White") {
    filledElement.style.backgroundColor = `hsl(${dataHue}, ${dataSat}%, ${dataColor}%)`;
  }

    const svgElement = createSvgElement3(dataColor, dataHue,  dataSat, dataVegan, svgContent, condition);
    filledElement.appendChild(svgElement);
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
      let dataSat = datapoint.flavor_sat;
      let dataVegan = datapoint.base_color;

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


      fillColor(dataTexture, filledElement, dataColor, dataHue, dataSat, dataVegan);
      fillLine(dataFilling, filledElement, dataColor, dataHue, dataSat);
      fillLine2(dataFilling, filledElement, dataColor, dataHue, dataSat, dataVegan);

      let square = document.createElement('div');
      square.id = 'square';

      let chocbar = document.createElement('div');
      chocbar.classList.add('chocbar');
      chocbar.style.backgroundColor = `hsl(${dataHue}, ${dataSat}%, ${dataColor - 5}%)`;
     
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

