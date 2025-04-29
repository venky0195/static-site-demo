export default async function handler(req, res) {
  console.log("This is a console");

  const targets = [
    "https://nextjs-starter-new.eu-gcpcontentstackapps.com",
    "https://nextjs-starter-new.eu-contentstackapps.com"
  ];

  const results = await Promise.all(
    targets.map(async (url) => {
      const start = Date.now();
      try {
        const response = await fetch(url);
        const latency = Date.now() - start;
        return {
          url,
          status: response.status,
          latency: `${latency} ms`
        };
      } catch (err) {
        return {
          url,
          error: err.message,
          latency: "failed"
        };
      }
    })
  );
  console.log(results,"results")
  res.status(200).json({
    message: "helloworld!",
    results
  });
}
