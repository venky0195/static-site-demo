export default function handler(request, context) {
    console.log("Headers->",Object.fromEntries(request.headers));

    return fetch(request)
}
