function isPatchUpdate(fromVersion, toVersion) {
  const [fromMajor, fromMinor] = fromVersion.split('.');
  const [toMajor, toMinor] = toVersion.split('.');
  return fromMajor === toMajor && fromMinor === toMinor && fromVersion !== toVersion;
}

module.exports = { isPatchUpdate };