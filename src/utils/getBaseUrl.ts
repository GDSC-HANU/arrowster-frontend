export const getBaseUrl = () => {
  if (process.env.VERCEL_ENV === 'production') {
    return 'https://your-production-url.com'
  } else {
    return 'http://localhost:3000'
  }
}
