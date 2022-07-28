const app = require('../../server/index')
const request = require('supertest')(app)
const assert = require('power-assert')

const temp = {
  name: 'mocha-test',
  template: "<h2>hello ${name}</h2>",
  data: '{name: "mocha"}'
}
// 描述一个场景，之后断言
describe('# test routes', function() {
  it('GET /xhr/v1/template', done => {
    request
      .get('/xhr/v1/template')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        assert(res.body.code === 200)
        assert(res.body.msg === 'success')
        assert(Array.isArray(res.body.data), '返回应为对象')
        done()
      })
  })

  it('POST /xhr/v1/template', done => { // 测试不会向数据库加数据
    request
      .post('/xhr/v1/template')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        assert(res.body.code === 200)
        assert(res.body.msg === 'success')
        assert(typeof res.body.data === 'object', '返回应为对象')
        assert(res.body.data._id !== undefined, '需返回新增模板ID')
        done()
      })
  })

  it('GET /xhr/v1/template/:id', done => {
    request
      .get('/xhr/v1/template/62e1eed2bf3017bd53989531')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        assert(res.body.code === 200)
        assert(res.body.msg === 'success')
        assert(typeof res.body.data === 'object', '返回应为对象')
        assert(res.body.data.name === 'test', '返回应与数据库一致')
        done()
      })
  })

  it('GET /xhr/v1/template/:id bad id', done => {
    request
      .get('/xhr/v1/template/62e1eed2bf3017bd53989511')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        assert(res.body.code === 400)
        assert(res.body.msg === 'success')
        assert(typeof res.body.data === 'object', '返回应为对象')
        done()
      })
  })

  it('PUT /xhr/v1/template/:id', done => {
    request
      .put('/xhr/v1/template/62e1eed2bf3017bd53989531')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        assert(res.body.code === 200)
        assert(res.body.msg === 'success')
        assert(typeof res.body.data === 'object', '返回应为对象')
        assert(res.body.data.name === 'test', '返回应与数据库一致')
        done()
      })
  })

  it('DELETE /xhr/v1/template/:id', done => {
    request
      .delete('/xhr/v1/template/62e1eed2bf3017bd53989531')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        assert(res.body.code === 200)
        assert(res.body.msg === '删除成功')
        done()
      })
  })

})