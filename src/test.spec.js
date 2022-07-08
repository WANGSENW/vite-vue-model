function sayHello(name, fn) {
    if (name == '测试') {
        fn()
    }
}
test('测试加法', () => {
    expect(1 + 2).toBe(3)
})
test('测试函数', () => {
    const fn = jest.fn()
    sayHello('测试', fn)
    expect(fn).toHaveBeenCalled()
})
