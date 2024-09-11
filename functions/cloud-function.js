export default function handler(req, res) {
    console.log("process.env",process.env)
    console.log("This is a console")
    res
    .status(200)
    .json({ env: JSON.stringify(process.env) })
}