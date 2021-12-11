import { translate, getTranslate } from '../src/translate'

test("Translate Default", (done) => {
    translate('Hello')
        .then(data => {
            expect(data).toBe('Hola');
            done();

        });

});

test("Translate Text EN", (done) => {
    translate({ q: 'Hola', sl: 'es', tl: 'en' })
        .then(data => {
            expect(data).toBe('Hello');
            done();
        });
});

test("Translate Text ZN", (done) => {
    translate({ q: 'Hola', sl: 'es', tl: 'zh' })
        .then(data => {
            expect(data).toBe('你好');
            done();
        });
});

test("Translate Text ZN Sync", () => {
    const data = getTranslate({ q: 'Hola', sl: 'es', tl: 'zh' })
    expect(data).toBe('你好');
});

