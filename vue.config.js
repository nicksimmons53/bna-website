module.exports = {
  "pluginOptions": {
    "s3Deploy": {
      "awsProfile": "default",
      "overrideEndpoint": false,
      "region": "us-west-2",
      "bucket": "bna-website-bucket",
      "createBucket": false,
      "staticHosting": true,
      "staticIndexPage": "index.html",
      "staticErrorPage": "index.html",
      "assetPath": "dist",
      "assetMatch": "**",
      "deployPath": "/",
      "acl": "public-read",
      "pwa": false,
      "enableCloudfront": false,
      "pluginVersion": "4.0.0-rc3",
      "uploadConcurrency": 5
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}