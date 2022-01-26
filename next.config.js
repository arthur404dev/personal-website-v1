/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
  i18n: {
    locales: ["en_US", "pt_BR"],
    defaultLocale: "en_US",
  },
}
