// Generated by CoffeeScript 2.3.1
(function() {
  var Base, alphabets, base, j, len, ref,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  alphabets = {};

  ref = ['01', '01234567', '0123456789', '0123456789abcdef', '0123456789ABCDEFGHJKMNPQRSTVWXYZ', '0123456789abcdefghijklmnopqrstuvwxyz', '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz', '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~'];
  for (j = 0, len = ref.length; j < len; j++) {
    base = ref[j];
    alphabets[base.length] = base;
  }

  // 2, 8, 10, 16, 32, 36, 58, 62, 64, 67
  Base = class Base {
    constructor(alphabet = 62) {
      var c, i, k, len1, ref1;
      if (typeof alphabet === 'number' && alphabet in alphabets) {
        this.alphabet = alphabets[alphabet];
      } else {
        this.alphabet = alphabet;
      }
      this.base = this.alphabet.length;
      this.reverse = new Map();
      this.reverseBig = new Map();
      ref1 = this.alphabet;
      for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
        c = ref1[i];
        this.reverse.set(c, i);
        this.reverseBig.set(c, BigInt(i));
      }
    }

    encode(n) {
      var alphabet, u, v;
      base = this.base;
      alphabet = this.alphabet;
      v = [];
      while (n > base) {
        u = modulo(n, base);
        v.unshift(alphabet[u]);
        n = Math.floor(n / base);
      }
      v.unshift(alphabet[n]);
      return v.join('');
    }

    encodeBig(n) {
      var alphabet, u, v;
      base = BigInt(this.base);
      alphabet = this.alphabet;
      v = [];
      while (n > base) {
        u = n % base;
        v.unshift(alphabet[u]);
        n /= base;
      }
      v.unshift(alphabet[n]);
      return v.join('');
    }

    decode(t) {
      var c, k, len1, reverse, u, v;
      v = 0;
      reverse = this.reverse;
      base = this.base;
      for (k = 0, len1 = t.length; k < len1; k++) {
        c = t[k];
        if (!reverse.has(c)) {
          throw new Error(`Invalid character \`${c}\``);
        }
        u = reverse.get(c);
        v *= base;
        v += u;
      }
      return v;
    }

    decodeBig(t) {
      var c, k, len1, reverse, u, v;
      v = BigInt(0);
      reverse = this.reverseBig;
      base = BigInt(this.base);
      for (k = 0, len1 = t.length; k < len1; k++) {
        c = t[k];
        if (!reverse.has(c)) {
          throw new Error(`Invalid character \`${c}\``);
        }
        u = reverse.get(c);
        v *= base;
        v += u;
      }
      return v;
    }

  };

  module.exports = Base;

}).call(this);
