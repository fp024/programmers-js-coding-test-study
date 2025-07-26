function isStandalone() {
  return process.env.VITEST_WORKER_ID === undefined;
}

export { isStandalone };
