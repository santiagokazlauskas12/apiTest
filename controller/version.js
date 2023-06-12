const versionGet = (req, res) => {
  res.status(200).json({
    ios: process.env.IOS_VERSION || "1111",
    android: process.env.ANDROID_VERSION || "1111",
  });
};

module.exports = { versionGet };
