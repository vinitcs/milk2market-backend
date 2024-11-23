const HttpStatusCodes = {
    // 1xx: Informational
    CONTINUE: { code: 100, message: "Continue" },
    SWITCHING_PROTOCOLS: { code: 101, message: "Switching Protocols" },
    PROCESSING: { code: 102, message: "Processing" },
    EARLY_HINTS: { code: 103, message: "Early Hints" },
  
    // 2xx: Success
    OK: { code: 200, message: "OK" },
    CREATED: { code: 201, message: "Created" },
    ACCEPTED: { code: 202, message: "Accepted" },
    NON_AUTHORITATIVE_INFORMATION: { code: 203, message: "Non Authoritative Information" },
    NO_CONTENT: { code: 204, message: "No Content" },
    RESET_CONTENT: { code: 205, message: "Reset Content" },
    PARTIAL_CONTENT: { code: 206, message: "Partial Content" },
    MULTI_STATUS: { code: 207, message: "Multi-Status" },
  
    // 3xx: Redirection
    MULTIPLE_CHOICES: { code: 300, message: "Multiple Choices" },
    MOVED_PERMANENTLY: { code: 301, message: "Moved Permanently" },
    MOVED_TEMPORARILY: { code: 302, message: "Moved Temporarily" },
    SEE_OTHER: { code: 303, message: "See Other" },
    NOT_MODIFIED: { code: 304, message: "Not Modified" },
    USE_PROXY: { code: 305, message: "Use Proxy" },
    TEMPORARY_REDIRECT: { code: 307, message: "Temporary Redirect" },
    PERMANENT_REDIRECT: { code: 308, message: "Permanent Redirect" },
  
    // 4xx: Client Error
    BAD_REQUEST: { code: 400, message: "Bad Request" },
    UNAUTHORIZED: { code: 401, message: "Unauthorized" },
    PAYMENT_REQUIRED: { code: 402, message: "Payment Required" },
    FORBIDDEN: { code: 403, message: "Forbidden" },
    NOT_FOUND: { code: 404, message: "Not Found" },
    METHOD_NOT_ALLOWED: { code: 405, message: "Method Not Allowed" },
    NOT_ACCEPTABLE: { code: 406, message: "Not Acceptable" },
    PROXY_AUTHENTICATION_REQUIRED: { code: 407, message: "Proxy Authentication Required" },
    REQUEST_TIMEOUT: { code: 408, message: "Request Timeout" },
    CONFLICT: { code: 409, message: "Conflict" },
    GONE: { code: 410, message: "Gone" },
    LENGTH_REQUIRED: { code: 411, message: "Length Required" },
    PRECONDITION_FAILED: { code: 412, message: "Precondition Failed" },
    REQUEST_TOO_LONG: { code: 413, message: "Request Entity Too Large" },
    REQUEST_URI_TOO_LONG: { code: 414, message: "Request-URI Too Long" },
    UNSUPPORTED_MEDIA_TYPE: { code: 415, message: "Unsupported Media Type" },
    REQUESTED_RANGE_NOT_SATISFIABLE: { code: 416, message: "Requested Range Not Satisfiable" },
    EXPECTATION_FAILED: { code: 417, message: "Expectation Failed" },
    IM_A_TEAPOT: { code: 418, message: "I'm a teapot" },
    INSUFFICIENT_SPACE_ON_RESOURCE: { code: 419, message: "Insufficient Space on Resource" },
    METHOD_FAILURE: { code: 420, message: "Method Failure" },
    MISDIRECTED_REQUEST: { code: 421, message: "Misdirected Request" },
    UNPROCESSABLE_ENTITY: { code: 422, message: "Unprocessable Entity" },
    LOCKED: { code: 423, message: "Locked" },
    FAILED_DEPENDENCY: { code: 424, message: "Failed Dependency" },
    UPGRADE_REQUIRED: { code: 426, message: "Upgrade Required" },
    PRECONDITION_REQUIRED: { code: 428, message: "Precondition Required" },
    TOO_MANY_REQUESTS: { code: 429, message: "Too Many Requests" },
    REQUEST_HEADER_FIELDS_TOO_LARGE: { code: 431, message: "Request Header Fields Too Large" },
    UNAVAILABLE_FOR_LEGAL_REASONS: { code: 451, message: "Unavailable For Legal Reasons" },
  
    // 5xx: Server Error
    INTERNAL_SERVER_ERROR: { code: 500, message: "Internal Server Error" },
    NOT_IMPLEMENTED: { code: 501, message: "Not Implemented" },
    BAD_GATEWAY: { code: 502, message: "Bad Gateway" },
    SERVICE_UNAVAILABLE: { code: 503, message: "Service Unavailable" },
    GATEWAY_TIMEOUT: { code: 504, message: "Gateway Timeout" },
    HTTP_VERSION_NOT_SUPPORTED: { code: 505, message: "HTTP Version Not Supported" },
    INSUFFICIENT_STORAGE: { code: 507, message: "Insufficient Storage" },
    NETWORK_AUTHENTICATION_REQUIRED: { code: 511, message: "Network Authentication Required" }
  };
  
  module.exports = HttpStatusCodes;
  