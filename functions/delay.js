export default async function handler(req, res) {
    console.log({ params: req.params });
    console.log({ query: req.query });
    console.log({ body: req.body });

    // Function to simulate sleep/delay
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Sleep for 3 minutes (180000 milliseconds)
    await sleep(180000);

    // Respond after the delay
    res.status(200).json({ message: 'Response after 3 minutes' });
}
