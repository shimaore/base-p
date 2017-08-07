    chai = require 'chai'
    chai.should(
    )

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


