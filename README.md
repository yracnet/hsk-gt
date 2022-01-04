# hsk-gt
HSK Google Translate HTTP Client

## Async Service
```js
import { translate } from 'hsk-gt'
const run = async () => {
    translate({ q: 'Hola', sl: 'es', tl: 'en' })
        .then(data => {
            console.log('Hola in EN: ', data);
            //Hola in EN: Hello
        });
}
run();
```

## Sync Service
```js
import { getTranslate } from 'hsk-gt'

const data = getTranslate({ q: 'Hola', sl: 'es', tl: 'zh-CN' })
console.log('Hola in ZH: ', data);
//Hola in ZH: 你好

```