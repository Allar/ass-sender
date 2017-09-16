var request = require('request');
var Guid = require('guid');

var url = "https://datarouter.ol.epicgames.com/datarouter/api/v1/public/data"

var qs = {
    SessionID: Guid.raw(),
    AppID: "UE4Game.Ass|ef8a437103494d3da2590389ce485cf3|ASS",
    AppVersion: "Ass.Ass",
    UserID: `ANON-{${Guid.raw()}}||`,
    AppEnvironment: "datacollector-binary",
    UploadType: "eteventstream"
}

var data = {
  "Events": [
    {
      "EventName": "SessionStart",
      "DateOffset": "00:00:01.337",
      "ProjectName": "ASS ASS ASS",
      "ProjectID": "ef8a437103494d3da2590389ce485cf3",
      "ProjectDescription": "ASS ASS ASS ASS",
      "ProjectVersion": "ASSSS",
      "AttributionId": "",
      "Platform": "Ass"
    },
    {
      "EventName": "SessionEnd",
      "DateOffset": "00:00:00.000"
    }
  ]
};

var headers = {
    'User-Agent': "game=Ass, engine=UE4, version=Ass, platform=Ass, osver=6.2.Ass"
};

request({method: 'POST', url: url, qs: qs, headers: headers, json: true, body: JSON.stringify(data)}, function (error, response, body) {
  if (response && response.statusCode == 204)
    {
        console.log("We sent ass.");
        process.exit();
        return;
    }
    console.log("failed.");
    process.exit();
});