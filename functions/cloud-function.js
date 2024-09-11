export default function handler(req, res) {
    console.log("process.env",process.env)
    console.log("This is a console")
    const withOutPath = getBaseCollectorUrl("https://dev-launch-api.csnonprod.com/telemetry");
    const withPath = getBaseCollectorUrl("https://dev-launch-api.csnonprod.com/telemetry/v1/logs")
    const envVar = getBaseCollectorUrl(process.env.CFX_TELEMETRY_SERVICE_ENDPOINT)

    const obj = {withOutPath: `${withOutPath}/v1/logs`, withPath: `${withPath}/v1/logs`, envVar: `${envVar}/v1/logs`}
    
    res
    .status(200)
    .json({ env: JSON.stringify(process.env), jsonObj: obj, stringifiedObj: JSON.stringify(obj)})
}

function getBaseCollectorUrl(url) {
    if (!url) return '';
  
    const logsPath = '/v1/logs';
    if (url.endsWith(logsPath)) {
      return url.replace(logsPath, '');
    }
  
    return url;
  }