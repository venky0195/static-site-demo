export default function handler(request, context) {
    console.log("Headers -> ", JSON.stringify(request.headers))
    return fetch(request)
}
