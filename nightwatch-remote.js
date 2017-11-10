/* globals module, process */

module.exports = {
  src_folders: ['src/test/browser/index.js'],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',

  selenium: {
    start_process: true,
    server_path:
      '/Users/anguscroll/Library/Caches/Homebrew/selenium-server-standalone-3.7.0.jar',
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': '/usr/local/bin/chromedriver',
    },
  },

  test_settings: {
    default: {
      launch_url: 'http://ondemand.saucelabs.com:80',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,
    },

    'chrome-mac': {
      desiredCapabilities: {
        browserName: 'chrome',
        platform: 'macOS 10.12',
      },
    },

    'chrome-windows': {
      desiredCapabilities: {
        browserName: 'chrome',
        platform: 'Windows 10',
      },
    },

    'safari-11': {
      desiredCapabilities: {
        browserName: 'safari',
        platform: 'macOS 10.12',
        version: '11.0',
      },
    },

    'safari-mac-9': {
      desiredCapabilities: {
        browserName: 'safari',
        platform: 'OS X 10.11',
        version: '9.0',
      },
    },

    'safari-mac-7': {
      desiredCapabilities: {
        browserName: 'safari',
        platform: 'OS X 10.9',
        version: '7.0',
      },
    },

    'ie-11': {
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.103',
      },
    },

    'ie-8': {
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '8.0',
      },
    },

    'firefox-13': {
      browserName: 'firefox',
      platform: 'Windows 7',
      version: '13.0',
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
      },
    },

    'samsung-S3': {
      desiredCapabilities: {
        browserName: 'Android',
        deviceName: 'Samsung Galaxy S3 Emulator',
        deviceOrientation: 'portrait',
        platformVersion: '4.4',
        platformName: 'Android',
      },
    },

    'samsung-G4': {
      desiredCapabilities: {
        browserName: 'Android',
        deviceName: 'Samsung Galaxy S4 GoogleAPI Emulator',
        deviceOrientation: 'portrait',
      },
    },

    'iPhone-4S': {
      desiredCapabilities: {
        browserName: 'Safari',
        deviceName: 'iPhone 4s Simulator',
        deviceOrientation: 'portrait',
        platformVersion: '8.1',
        platformName: 'iOS',
      },
    },

    'iPhone-X': {
      desiredCapabilities: {
        browserName: 'Safari',
        deviceName: 'iPhone X Simulator',
        deviceOrientation: 'portrait',
        platformVersion: '11.0',
        platformName: 'iOS',
      },
    },

    kindleFire: {
      desiredCapabilities: {
        browserName: 'Browser',
        deviceName: 'Amazon Kindle Fire HD 8.9 GoogleAPI Emulator',
        deviceOrientation: 'portrait',
        platformVersion: '4.4',
        platformName: 'Android',
      },
    },
  },
};
