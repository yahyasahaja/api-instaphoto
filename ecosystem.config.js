module.exports = {
  apps : [{
    name: 'instaphoto',
    script: './index.js',
    instances: 1,
    autorestart: true,
    ignore_watch: ['node_modules', 'public/uploads'],
    watch_options: {
      'followSymlinks': false
    }, 
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
}