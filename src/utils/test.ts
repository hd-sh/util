const customLog = console.log.bind(console)
export default {
  heart: (params: any): void => {
    console.log(params)
  },
  customLog,
}
