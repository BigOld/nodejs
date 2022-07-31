const { Article, User } = require('../model')

// 获取文章列表
exports.getArticles = async (req, res, next) => {
  try {
    const {
      limit = 20,
      offset = 0,
      tag,
      author
    } = req.query

    const filter = {}

    if(tag) {
      filter.tagList = tag
    }

    if(author) {
      const user = await User.findOne({
        username: author
      })
      filter.author = user ? user._id : null
    }

    const articles = await Article.find(filter) // 包含这个就可以
      .populate('author')
      .skip(Number.parseInt(offset)) // 跳过多少条
      .limit(Number.parseInt(limit)) // 取多少条
      .sort({
        createAt: -1 // -1 倒序 1 升序
      })
    const articlesCount = articles.length
    res.status(200).json({
      articles,
      articlesCount
    })
  } catch (err) {
    next(err)
  }
}


// 获取用户关注的作者文章列表
exports.getFeedArticles = async (req, res, next) => {
  try {
    res.send('getFeedArticles')
  } catch (err) {
    next(err)
  }
}

// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId).populate('author') // 将该字段作为外键去author表查询并替换该字段
    if(!article) {
      return res.status(404)
    }
    res.status(200).json({
      article
    })
  } catch (err) {
    next(err)
  }
}

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article)
    article.author = req.user._id
    article.populate('author')
    await article.save()
    res.status(201).json({
      article
    })
  } catch (err) {
    next(err)
  }
}

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    const article = req.article
    const bodyArticle = req.body.article
    article.title = bodyArticle.title || article.title
    article.description = bodyArticle.description || article.description
    article.body = bodyArticle.body || article.body
    await Article.save()
    res.status(200).json({
      article
    })
  } catch (err) {
    next(err)
  }
}

// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    const article = req.article
    await article.remove()
    res.status(204).end()
  } catch (err) {
    next(err)
  }
  
}

// 添加文章评论
exports.createArticleComment = async (req, res) => {
  try {
    res.send('createArticleComment')
  } catch (err) {
    next(err)
  }
}

// 获取文章评论列表
exports.getArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getArticleComments')
  } catch (err) {
    next(err)
  }
}

// 删除文章评论
exports.deleteArticleComment = async (req, res, next) => {
  try {
    // 处理请求
    res.send('deleteArticleComment')
  } catch (err) {
    next(err)
  }
}

// 文章点赞
exports.favoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('favoriteArticle')
  } catch (err) {
    next(err)
  }
}

// 取消文章点赞
exports.unfavoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('unfavoriteArticle')
  } catch (err) {
    next(err)
  }
}