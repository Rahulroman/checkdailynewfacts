$.get(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=metric&include=current&key=8Z32BSY2Q4BAGXVR327HMFFP5&contentType=json",
  function (data, status) {
    console.log(data);

    var Location = data.resolvedAddress;
    var conditions = data.currentConditions.conditions;

    document.getElementById("todaytemp").textContent =
      data.currentConditions.temp.toString();
    document.getElementById("todaylocation").textContent = Location.toString();
    document.getElementById("todaycondition").textContent =
      conditions.toString();
  }
);
