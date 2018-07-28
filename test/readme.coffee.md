    {expect} = require 'chai'

    describe 'The tests from the README', ->

      Base = require '..'

      it 'should work for numbers', ->

        base62 = new Base(62)
        expect base62.encode(2017)
        .to.equal 'WX'
        expect base62.decode('WX')
        .to.equal 2017

        base5 = new Base('01234')
        expect base5.encode(7)
        .to.equal '12'
        expect base5.decode('12')
        .to.equal 7


      it 'should work for BigInt', ->

        base62 = new Base(62)
        expect base62.encodeBig(`2017n`)
        .to.equal 'WX'
        expect base62.decodeBig('WX') is `2017n`
        .to.be.true

        base5 = new Base('01234')
        expect base5.encodeBig(`7n`)
        .to.equal '12'
        expect base5.decodeBig('12') is `7n`
        .to.be.true

