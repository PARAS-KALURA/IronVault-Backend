// asyncHandler is a safety wrapper that automatically catches errors in async routes so your server doesn’t crash.
//asyncHandler protects your SERVER from crashes.
// Server protection.
// 👉 It hands the error to Express.

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
module.exports = asyncHandler;
