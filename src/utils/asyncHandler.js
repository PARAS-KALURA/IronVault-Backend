// asyncHandler is a safety wrapper that automatically catches errors in async routes so your server doesn’t crash.
//asyncHandler protects your SERVER from crashes.
// Server protection.
// 👉 It hands the error to Express.


// It catches async errors and sends them to Express.

//This is a wrapper function.

// Meaning:

// 👉 It wraps your route so errors don’t crash the server.

//router.post("/signup", asyncHandler(signup));

//(req, res, next) => {
//    Promise.resolve(signup(req, res, next)).catch(next);;
// }


const asyncHandler = (fn) => (req, res, next) => {
   Promise.resolve(fn(req, res, next)).catch(next); // If it throws an error, catch it and pass it to next.”
};

module.exports = asyncHandler;


