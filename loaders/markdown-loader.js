//获取参数
const { getOptions } = require('loader-utils')
//校验用户传递参数是否正确
const validateOptions = require('schema-utils')
//引入markdown-it
const MarkdownIt  = require('markdown-it')



const schema = {
  type: 'object',
  properties: {
    html: {
      type: 'boolean'
    },
    xhtmlOut: {
    	type: 'boolean'
    },
    langPrefix: {
    	type: 'string'
    },
    //markdown-it的配置
    linkify: {
    	type: 'boolean'
    }
  }
}

module.exports =  function(source) {

  const options = getOptions(this)
  //合并用户传递的参数和默认参数
  const md = MarkdownIt(options)
//用来验证用户传递的参数是否正确
  validateOptions(schema, options)

  return md.render(source)
}