    ({expect} = require 'chai').should()

    describe 'Base', ->
      Base = require '..'

      base10 = new Base 10
      it 'should have the proper alphabet', ->
        base10.alphabet.should.equal '0123456789'

      it 'should encode base 10', ->
        base10.encode(7).should.equal '7'
        base10.encode(2017).should.equal '2017'

      it 'should decode base 10', ->
        base10.decode('2017').should.equal 2017
        base10.decode('7').should.equal 7

      base16 = new Base 16
      it 'should encode base 16', ->
        base16.encode(65534).should.equal 'fffe'
        base16.encode(16385).should.equal '4001'

      it 'should decode base 16', ->
        base16.decode('fffe').should.equal 65534
        base16.decode('4001').should.equal 16385

      it 'should encode base 10 (big)', ->
        base10.encodeBig(BigInt 7).should.equal '7'
        base10.encodeBig(BigInt 2017).should.equal '2017'

      it 'should decode base 10 (big)', ->
        expect(base10.decodeBig('2017') is `2017n`).to.be.true
        # base10.decodeBig('2017').should.equal BigInt 2017
        expect(base10.decodeBig('7') is `7n`).to.be.true
        # base10.decodeBig('7').should.equal BigInt 7

      base16 = new Base 16
      it 'should encode base 16 (big)', ->
        base16.encodeBig(BigInt 65534).should.equal 'fffe'
        base16.encodeBig(BigInt 16385).should.equal '4001'

      it 'should decode base 16 (big)', ->
        expect(base16.decodeBig('fffe') is `65534n`).to.be.true
        # base16.decodeBig('fffe').should.equal `65534n`
        expect(base16.decodeBig('4001') is `16385n`).to.be.true
        # base16.decodeBig('4001').should.equal `16385n`

      base62 = new Base 62
      it 'should do base-62 (big)', ->
        l = '999999999999999999999999999999999999999999999999'
        expect(base62.encodeBig(base62.decodeBig(l))).to.equal l
        n = `999999999999999999999999999999999999999999999999n`
        expect(base62.decodeBig(base62.encodeBig(n)) is n).to.be.true
