function jsonSv(data, failback) {
  try {
    return JSON.parse(data)
  } catch (e) {
    return failback
  }
}

export { jsonSv }
