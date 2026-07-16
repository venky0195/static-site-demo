export default {
  fetch(request: Request) {
     const count = 100

  console.log("=== START ===");

  for (let i = 1; i <= count; i++) {
    console.log(
      JSON.stringify({
        sequence: i,
        timestamp: Date.now(),
        route: "/log-generator",
        message: `Generated log ${i}`,
        level: "INFO",
      }),
    );
  }

  console.log("=== END ===");

 return new Response(`GENERATED ${count}`);
}
};