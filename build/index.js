"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const swagger_1 = require("./config/swagger"); // Import swagger configuration
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
// Serve the Swagger UI documentation at /api-docs
app.use("/api-docs", swagger_1.swaggerUi.serve, swagger_1.swaggerUi.setup(swagger_1.swaggerSpec));
app.get("/", (req, res) => {
    res.send("Welcome to Tutor Connect API!");
});
// Use the user routes
app.use("/api", userRoutes_1.default);
// Start the server after DB connection
database_1.AppDataSource.initialize()
    .then(() => {
    console.log("📦 Database has been connected!");
    app.listen(port, () => {
        console.log(`🚀 Server is running on http://localhost:${port}`);
    });
})
    .catch((err) => {
    console.error("❌ Error during database initialization", err);
});
