"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = exports.swaggerUi = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
// Swagger definition
const swaggerOptions = {
    definition: {
        openapi: "3.0.0", // API version
        info: {
            title: "Tutor Connect API", // API title
            version: "1.0.0", // API version
            description: "API documentation for the Tutor Connect application", // API description
        },
        servers: [
            {
                url: "http://localhost:3000", // Server URL
            },
        ],
    },
    // Path to the API docs
    apis: ["src/routes/*.ts"], // Path to your route files (adjust path as needed)
};
// Initialize swagger-jsdoc
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.swaggerSpec = swaggerSpec;
