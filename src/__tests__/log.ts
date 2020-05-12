import log from '../log'

describe('log', () => {
  it('uses console.log', () => {
    const consoleLogSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {})
    const message = 'Hello World!'

    log(message)

    expect(consoleLogSpy).toHaveBeenCalledWith(message)

    consoleLogSpy.mockRestore()
  })
})
