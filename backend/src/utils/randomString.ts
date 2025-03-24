export default function generateRanomId(startChar: string) {
  const randomNumbers = Math.floor(100000 + Math.random() * 900000)
  return `${startChar}${randomNumbers}`
}
