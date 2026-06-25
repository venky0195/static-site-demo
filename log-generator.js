// functions/log-generator.js

export default async function handler(request, response) {
  const count = Number(request.query.count ?? 100);

  console.log("=== START ===");

  for (let i = 1; i <= count; i++) {
    console.log(
      JSON.stringify({
        sequence: i,
        timestamp: Date.now(),
        route: "/log-generator",
        requestId: request.headers["x-request-id"] ?? "local",
        message: `Generated log ${i}`,
        level: "INFO",
      }),
    );
  }

  console.log("=== END ===");

  response.status(200).json({
    generated: count,
  });
}