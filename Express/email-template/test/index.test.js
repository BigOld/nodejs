const app = require('../server/index')
const request = require('supertest')(app)

// 描述一个场景，之后断言
describe('# test index.js', function() {
  it('GET /api 404', done => {
    request
      .get('/api')
      .expect(404, done)
  })
})