export default function(context) {
  debugger
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
  console.log(process.client)
}
