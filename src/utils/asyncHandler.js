// asyncHandler is a safety wrapper that automatically catches errors in async routes so your server doesn’t crash.
//asyncHandler protects your SERVER from crashes.
// Server protection.
// 👉 It hands the error to Express.

const asyncHandler = (e) => (req, res, next) => {
   Promise.resolve(e(req, res, next)).catch(next); // If it throws an error, catch it and pass it to next.”
};

module.exports = asyncHandler;


