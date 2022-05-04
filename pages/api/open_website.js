export default async function open_website(req, res) {
  res.status(200).json({url: process.env.ENDPOINT_APP})
}