    alphabets = {}
    alphabets[base.length] = base for base in [
      '01'
      '01234567'
      '0123456789'
      '0123456789abcdef'
      '0123456789ABCDEFGHJKMNPQRSTVWXYZ'
      '0123456789abcdefghijklmnopqrstuvwxyz'
      '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~'
    ]

    class Base
      constructor: (alphabet = 62) ->
        if typeof alphabet is 'number' and alphabet of alphabets
          @alphabet = alphabets[alphabet]
        else
          @alphabet = alphabet

        @base = @alphabet.length
        @reverse = new Map()
        @reverseBig = new Map()
        for c,i in @alphabet
          @reverse.set c, i
          @reverseBig.set c, BigInt i

      encode: (n) ->
        base = @base
        alphabet = @alphabet
        v = []
        while n > base
          u = n %% base
          v.unshift alphabet[u]
          n //= base
        v.unshift alphabet[n]
        v.join ''

      encodeBig: (n) ->
        base = BigInt @base
        alphabet = @alphabet
        v = []
        while n > base
          u = n % base
          v.unshift alphabet[u]
          n /= base
        v.unshift alphabet[n]
        v.join ''

      decode: (t) ->
        v = 0
        reverse = @reverse
        base = @base
        for c in t
          unless reverse.has c
            throw new Error "Invalid character `#{c}`"
          u = reverse.get c
          v *= base
          v += u
        v

      decodeBig: (t) ->
        v = BigInt 0
        reverse = @reverseBig
        base = BigInt @base
        for c in t
          unless reverse.has c
            throw new Error "Invalid character `#{c}`"
          u = reverse.get c
          v *= base
          v += u
        v

    module.exports = Base
