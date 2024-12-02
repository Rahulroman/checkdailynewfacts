////////////// Weather
$.get(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=metric&include=current&key=8Z32BSY2Q4BAGXVR327HMFFP5&contentType=json",
  function (data, status) {
    var Location = data.resolvedAddress;
    var conditions = data.currentConditions.conditions;

    document.getElementById("todaytemp").textContent =
      data.currentConditions.temp.toString();
    document.getElementById("todaylocation").textContent = Location.toString();
    document.getElementById("todaycondition").textContent =
      conditions.toString();
  }
);
/////////////////////////////////////////////////////////////////////////////////

///////////////////// news main
$.get(
  "https://newsdata.io/api/1/news?apikey=pub_605436edd0b400eaa6cf19bd3bbd9f1a74119&q=news&country=in,gb,us&language=en,hi&category=business,politics,science,sports,technology ",
  function (data, status) {
    const newsContainer = document.getElementById("NewsContainer");
    //data.data.length

    var DataResult = data.results;
    if (DataResult.length > 5) {
      for (var i = 0; i < data.results.length; i++) {
        var title = DataResult[i].title || "No title available";
        var description =
          DataResult[i].description || "No description available";
        var NewsImage = DataResult[i].image_url || "img/TopHeaderLogo.png";
        // Create a card for each news item
        const newsCard = document.createElement("div");
        newsCard.classList.add("col-lg-6", "col-xl-4", "mt-4");
        newsCard.innerHTML = `
        <div class="card h-100">
          <div class="position-relative overflow-hidden rounded">
            <img src="${NewsImage}" class="card-img-top img-fluid rounded img-zoomin w-100" alt="News Image" />
          </div>
          <div class="card-body">
            <h5 class="card-title" style="font-size: 1.25rem;">${title}</h5>
            <p class="card-text">${description}</p>
          </div>
        </div>
      `;

        // Append the card to the container
        newsContainer.appendChild(newsCard);
      } // for
    } // if
    else {
      $.get(
        "https://api.currentsapi.services/v1/search?keywords=political&language=en&apiKey=JeXg4oM-kE1Lt_t8sGTACJjJCGOzhegcVK0jLRqOkf1WUE08",
        function (data, status) {
          const newsContainer = document.getElementById("NewsContainer");

          var DataResult = data.news;
          if (DataResult.length > 5) {
            for (var i = 0; i < data.results.length; i++) {
              var title = DataResult[i].title || "No title available";
              var description =
                DataResult[i].description || "No description available";
              var NewsImage = DataResult[i].image || "img/TopHeaderLogo.png";

              // Create a card for each news item
              const newsCard = document.createElement("div");
              newsCard.classList.add("col-lg-6", "col-xl-4", "mt-4");
              newsCard.innerHTML = `
                <div class="card h-100">
                  <div class="position-relative overflow-hidden rounded">
                    <img src="${NewsImage}" class="card-img-top img-fluid rounded img-zoomin w-100" alt="News Image" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title" style="font-size: 1.25rem;">${title}</h5>
                    <p class="card-text">${description}</p>
                  </div>
                </div>
              `;

              // Append the card to the container
              newsContainer.appendChild(newsCard);
            } // for
          } // if
        }
      );
    } //else
  }
);
//////////////////////////////////////////////////////////////////////////////////

////////////  news side
$.get(
  "https://newsdata.io/api/1/news?apikey=pub_605436edd0b400eaa6cf19bd3bbd9f1a74119&country=af,in,iq,il,ua&language=en,hi&category=crime,other,politics,top",
  function (data, status) {
    const newsContainer = document.getElementById("sitecontainer");

    var DataResult = data.results;
    if (DataResult.length > 5) {
      for (var i = 0; i < DataResult.length; i++) {
        var title = DataResult[i].title || "No title available";
        var description =
          DataResult[i].description || "No description available";
        var NewsImage = DataResult[i].image_url || "/img/TopHeaderLogo.png";

        // Create a div for each news item
        const newsDiv = document.createElement("div");
        newsDiv.id = `newsItem${i}`; // Assign a unique ID to each div
        newsDiv.classList.add("news-item", "mb-4");

        // Add content to the div
        newsDiv.innerHTML = `
              <div class="position-relative overflow-hidden rounded">
                <img src="${NewsImage}" class="img-fluid rounded img-zoomin w-100" alt="News Image" />
              </div>
              <div class="border-bottom py-3">
                <a href="#" class="display-4 text-dark mb-0 link-hover" style="font-size: 1.5rem!important;">
                  ${title}
                </a>
              </div>
              <p class="mt-3 mb-4">${description}</p>
            `;

        // Append the div to the container
        newsContainer.appendChild(newsDiv);
      }
    } else {
      "https://www.searchapi.io/api/v1/search?api_key=Kku9GyFxgyj2vHPcPXn9Aedg&engine=google_news&location=India&q=Politics",
        function (data, status) {
          var DataResult = data.organic_results;

          if (DataResult.length > 5) {
            for (var i = 0; i < DataResult.length; i++) {
              var title = DataResult[i].title || "No title available";
              var description =
                DataResult[i].snippet || "No description available";
              var NewsImage =
                DataResult[i].thumbnail || "/img/TopHeaderLogo.png";

              // Create a div for each news item
              const newsDiv = document.createElement("div");
              newsDiv.id = `newsItem${i}`; // Assign a unique ID to each div
              newsDiv.classList.add("news-item", "mb-4");

              // Add content to the div
              newsDiv.innerHTML = `
                  <div class="position-relative overflow-hidden rounded">
                    <img src="${NewsImage}" class="img-fluid rounded img-zoomin w-100" alt="News Image" />
                  </div>
                  <div class="border-bottom py-3">
                    <a href="#" class="display-4 text-dark mb-0 link-hover" style="font-size: 1.5rem!important;">
                      ${title}
                    </a>
                  </div>
                  <p class="mt-3 mb-4">${description}</p>
                `;

              // Append the div to the container
              newsContainer.appendChild(newsDiv);
            } // for
          } // if
        }; // api
    } // else
  }
);
//////////////////////////////////////////////////////////////////////////////////

////// Latest news down site

$.get(
  "https://newsdata.io/api/1/news?apikey=pub_605436edd0b400eaa6cf19bd3bbd9f1a74119&q=latest%20news&country=in,us&language=en,hi",
  function (data, status) {
    const newsContainer = document.getElementById("NewsContainerLatest"); // Ensure this container exists in your HTML

    var DataResult = data.results;
    if (DataResult.length > 5) {
      for (var i = 0; i < data.results.length; i++) {
        // Limit to 10 items
        var latnewstitle = DataResult[i].title || "No title available";
        var categerylate = DataResult[i].category || "No category available";
        var latnewsimage = DataResult[i].image_url || "default-image.jpg";
        var latesource_name =
          DataResult[i].source_name || "No source name available";

        // Create the HTML for each news item
        var newsHTML = `
        <div class="latest-news-item" >
          <div class="bg-light rounded">
            <div class="rounded-top overflow-hidden">
              <img src="${latnewsimage}" class="img-zoomin img-fluid rounded-top w-100" alt="${latnewstitle}" />
            </div>
            <div class="d-flex flex-column p-4">
              <a href="#" class="" style="font-size:20px;">${latnewstitle}</a>
              <div class="d-flex justify-content-between">
                <a href="#" class="small text-body link-hover">${categerylate}</a>
                <small class="text-body d-block"><i class="fas fa-calendar-alt me-1"></i>${latesource_name}</small>
              </div>
            </div>
          </div>
        </div>
      `;

        // Append the newsHTML to the container
        newsContainer.innerHTML += newsHTML;
      }
    } else {
      "https://www.searchapi.io/api/v1/search?api_key=Kku9GyFxgyj2vHPcPXn9Aedg&engine=google_news&location=India&q=finance",
        function (data, status) {
          var DataResult = data.organic_results;

          if (DataResult.length > 5) {
            for (var i = 0; i < DataResult.length; i++) {
              var title = DataResult[i].title || "No title available";
              var description =
                DataResult[i].snippet || "No description available";
              var NewsImage =
                DataResult[i].thumbnail || "/img/TopHeaderLogo.png";

              // Create a div for each news item
              const newsDiv = document.createElement("div");
              newsDiv.id = `newsItem${i}`; // Assign a unique ID to each div
              newsDiv.classList.add("news-item", "mb-4");

              // Add content to the div
              newsDiv.innerHTML = `
            <div class="position-relative overflow-hidden rounded">
              <img src="${NewsImage}" class="img-fluid rounded img-zoomin w-100" alt="News Image" />
            </div>
            <div class="border-bottom py-3">
              <a href="#" class="display-4 text-dark mb-0 link-hover" style="font-size: 1.5rem!important;">
                ${title}
              </a>
            </div>
            <p class="mt-3 mb-4">${description}</p>
          `;

              // Append the div to the container
              newsContainer.appendChild(newsDiv);
            } // for
          } // if
        }; // api
    }
  }
);
//////////////////////////////////////////////////////////////////////////////////

/////////// crypto data
const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
function fetchCryptoData() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayCryptoData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Function to display the cryptocurrency data on the page
function displayCryptoData(data) {
  const { bpi } = data;

  // Clear existing content
  const usdElement = document.getElementById("bitcoin-usd");
  const gbpElement = document.getElementById("bitcoin-gbp");
  const eurElement = document.getElementById("bitcoin-eur");

  // Bitcoin USD
  usdElement.innerHTML = `
    <div class="col-4">
      <img src="https://media.istockphoto.com/id/1179928207/photo/three-dimensional-golden-dollar-sign-lying-on-the-american-flag.jpg?s=612x612&w=0&k=20&c=yfLoEch5xRKJh-EIQ99XbRZsbEH1xL7v21BkVMUkwus=" width="100" height="100" alt="Bitcoin USD">
    </div>
    <div class="col-8">
      <div class="features-content d-flex flex-column">
        <p class="text-uppercase mb-2">Bitcoin (USD)</p>
        <h3>${bpi.USD.code}</h3>
        <p class="rate">${bpi.USD.symbol} ${parseFloat(
    bpi.USD.rate_float
  ).toFixed(2)}</p>
        
      </div>
    </div>
  `;

  // Bitcoin GBP
  gbpElement.innerHTML = `
    <div class="col-4">
      <img src="https://thumbs.dreamstime.com/b/british-pound-4277660.jpg" width="100" height="100" alt="Bitcoin GBP">
    </div>
    <div class="col-8">
      <div class="features-content d-flex flex-column">
        <p class="text-uppercase mb-2">Bitcoin (GBP)</p>
        <h3>${bpi.GBP.code}</h3>
        <p class="rate">${bpi.GBP.symbol} ${parseFloat(
    bpi.GBP.rate_float
  ).toFixed(2)}</p>
        
      </div>
    </div>
  `;

  // Bitcoin EUR
  eurElement.innerHTML = `
    <div class="col-4">
      <img src="https://thumbs.dreamstime.com/b/gold-currency-euro-symbol-flag-country-white-background-d-illustration-90206952.jpg" width="100" height="100" alt="Bitcoin EUR">
    </div>
    <div class="col-8">
      <div class="features-content d-flex flex-column">
        <p class="text-uppercase mb-2">Bitcoin (EUR)</p>
        <h3>${bpi.EUR.code}</h3>
        <p class="rate">${bpi.EUR.symbol} ${parseFloat(
    bpi.EUR.rate_float
  ).toFixed(2)}</p>
        
      </div>
    </div>
  `;

  // Trigger animation after data is loaded
  setTimeout(() => {
    document
      .querySelectorAll(".features-item")
      .forEach((item) => item.classList.add("visible"));
  }, 100); // Delay to trigger animation for each card
}

// Fetch and display the data when the page loads
window.onload = fetchCryptoData;

//////////////////////////////////////////////////////////////////////////////////
