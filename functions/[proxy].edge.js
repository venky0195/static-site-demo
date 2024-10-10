export default function handler(request, context) {
    console.log("Headers -> ", JSON.stringify(request.headers));
    console.log("Stringified Headers -> ", JSON.stringify(request.headers));
    console.log("x-forwarded for",request.headers.get('x-forwarded-for'));
    return fetch(request)
}
