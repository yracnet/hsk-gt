import { assertConfig, assertParams } from '../src/setting'


test("Setting Param", () => {
    const p = assertParams();
    expect(p).toMatchObject(
        {
            "hl": "en",
            "q": "undefined",
            "sl": "en",
            "tl": "es",
        }
    );
});

test("Setting Param Text", () => {
    const p = assertParams("Hello");
    expect(p).toMatchObject(
        {
            "hl": "en",
            "q": "Hello",
            "sl": "en",
            "tl": "es",
        }
    );
});

test("Setting Param Object", () => {
    const p = assertParams({ q: "Hello", tl: 'zh' });
    expect(p).toMatchObject(
        {
            "hl": "en",
            "q": "Hello",
            "sl": "en",
            "tl": "zh-CN",
        }
    );
});
