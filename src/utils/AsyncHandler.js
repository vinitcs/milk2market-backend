// Error Forwarding, as next() is use to send futher in case here we take middleware.
const AsyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { AsyncHandler };

// reject == catch

//Another method:


// For Direct Error Response, as no next() to send futher in case here we take middleware.
// const AsyncHandler = (fn) => {
//   async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (err) {
//       res.status(err.code || 500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   };
// };


//For understanding perpose

// const AsyncHandler = () => {};
// const AsyncHandler = (func) => {()=>{}};
// const AsyncHandler = (func) => {async()=>{}};
