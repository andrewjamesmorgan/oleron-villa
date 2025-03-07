exports = async function() {
  const collection = context.services.get('Oleron').db('Oleron').collection('tides');
  const urlPrefix = "https://api.stormglass.io/v2";
  const apiKey = "";
  const long = "-1.33";
  const lat = "45.91";
  const date = new Date();
  const start = new Date(date.setDate(date.getDate() - 1)).toISOString().split('T')[0];
  const end = new Date(date.setDate(date.getDate() + 7)).toISOString().split('T')[0];
  console.log(`From ${start} to ${end}`);
  let response = await context.http.get({ url: `${urlPrefix}/tide/sea-level/point?lat=${lat}&lng=${long}&start=${start}&end=${end}`, 
    headers: {'Authorization': [apiKey]}});
  if (response.statusCode === 200) {
    const body = response.body.text();
    console.log(body);
    const source = EJSON.parse(body).meta.station.source;
    const station = EJSON.parse(body).meta.station.name;
    const heightList = EJSON.parse(body).data.map(reading => {
      return {
        station: {
          name: station,
          source: source
        },
        reading: {
          time: new Date(reading.time),
          height: reading[source]
        }
      };
    });
    if (heightList.length === 0) {
      console.log("List of tide heights is empty");
      return;
    }
    
    try {
      await collection.deleteMany({}, {ordered: false});
    } catch(err) {
      console.log("Error occurred while deleting tide heights:", err.message);
      return;
    }
    try {
      await collection.insertMany(heightList, {ordered: false});
    } catch(err) {
      console.log("Error occurred while inserting tide heights:", err.message);
      return;
    }
  } else {
    console.log('Failed to fetch list of tide heights: ${response.status}');
  }
  
  response = await context.http.get({ url: `${urlPrefix}/tide/extremes/point?lat=${lat}&lng=${long}&start=${start}&end=${end}`, 
    headers: {'Authorization': [apiKey]}});
  if (response.statusCode === 200) {
    const body = response.body.text();
    console.log(body);
    const source = EJSON.parse(body).meta.station.source;
    const station = EJSON.parse(body).meta.station.name;
    const heightList = EJSON.parse(body).data.map(reading => {
      let doc =  {
        station: {
          name: station,
          source: source
        },
        reading: {
          time: new Date(reading.time),
          height: reading.height
        }
      };
      if (reading.type && reading.type === "high") {
        doc.reading.high = reading.height;
      }
      if (reading.type && reading.type === "low") {
        doc.reading.low = reading.height;
      }
      return doc;
    });
    if (heightList.length === 0) {
      console.log("List of extreme tide heights is empty");
      return;
    }
    try {
      await collection.insertMany(heightList, {ordered: false});
    } catch(err) {
      console.log("Error occurred while inserting extreme tide heights:", err.message);
      return;
    }
  } else {
    console.log(`Failed to fetch list of extreme tide heights: ${response.status}`);
  }
};