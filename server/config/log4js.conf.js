const path = require('path')
const logpath = path.join(__dirname, '../log')

function reslove (filename) {
  return path.join(logpath, filename)
}

const logCategories = ['server']

module.exports = getLogConfig(logCategories)

// 生成log4js的配置
function getLogConfig (categoriesArr) {
  const appenders = {}
  const categories = {}
  categoriesArr.forEach(catego => {
    // erro日志
    appenders[catego + 'Emergencies'] = {
      'type': 'dateFile',
      'filename': reslove(catego + '/' + catego + '.error.log'),
      'maxLogSize': 1024,
      'backups': 4
    }
    appenders[catego + 'Errors'] = {
      'type': 'logLevelFilter',
      'appender': catego + 'Emergencies',
      'level': 'error'
    }
    // warn日志
    appenders[catego + 'Warning'] = {
      'type': 'dateFile',
      'filename': reslove(catego + '/' + catego + '.warn.log'),
      'maxLogSize': 1024,
      'backups': 4
    }
    appenders[catego + 'Warns'] = {
      'type': 'logLevelFilter',
      'appender': catego + 'Warning',
      'level': 'error'
    }
    // info 日志
    appenders[catego] = {
      'type': 'dateFile',
      'filename': reslove(catego + '/' + catego + '.access.log'),
      'pattern': '-yyyy-MM-dd',
      'maxLogSize': 1024,
      'backups': 4
    }

    categories[catego] = {
      'appenders': ['console', catego, catego + 'Errors'],
      'level': 'info'
    }
  })

  appenders.console = {
    'type': 'console'
  }
  categories.default = {
    'appenders': ['console'],
    'level': 'debug'
  }

  return {
    dev: {
      'pm2InstanceVar': 'INSTANCE_ID',
      'pm2': true,
      appenders,
      categories
    },
    test: {},
    prod: {}
  }
  // 生成的模板格式如下：
  // {
  //   dev: {
  //     'pm2InstanceVar': 'INSTANCE_ID',
  //     'pm2': true,
  //     'appenders': {
  //       'console': {
  //         'type': 'console'
  //       },
  //       'serverEmergencies': {
  //         'type': 'dateFile',
  //         'filename': reslove('server.error.log'),
  //         'maxLogSize': 1024,
  //         'backups': 4
  //       },
  //       'serverErrors': {
  //         'type': 'logLevelFilter',
  //         'appender': 'serverEmergencies',
  //         'level': 'error'
  //       },
  //       'server': {
  //         'type': 'dateFile',
  //         'filename': reslove('server.access.log'),
  //         'pattern': '-yyyy-MM-dd',
  //         'maxLogSize': 1024,
  //         'backups': 4
  //       }
  //     },
  //     'categories': {
  //       'server': {
  //         'appenders': ['console', 'server', 'serverErrors'],
  //         'level': 'info'
  //       },
  //       'default': {
  //         'appenders': ['console'],
  //         'level': 'debug'
  //       }
  //     }
  //   },
  //   test: {},
  //   prod: {}
  // }
}
