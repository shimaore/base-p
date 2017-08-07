# Install

```
npm install base-p
```

# Usage

```
const Base = require('base-p')

base62 = new Base(62)
base62.encode(2017) // returns 'WX'
base62.decode('WX') // returns 2017

base5 = new Base('01234')
base5.encode(7)     // returns '12'
base5.decode('12')  // returns 7
```

The parameter for the constructor is a either a string containing the alphabet used for the conversion, or an integer representing the base for one of the [predefined alphabets](https://github.com/cryptocoinjs/base-x#alphabets):

Base | Alphabet
------------- | -------------
2 | `01`
8 | `01234567`
11 | `0123456789a`
16 | `0123456789abcdef`
32 | `0123456789ABCDEFGHJKMNPQRSTVWXYZ`
36 | `0123456789abcdefghijklmnopqrstuvwxyz`
58 | `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`
62 | `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
64 | `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`
66 | `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~`

