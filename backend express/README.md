Замедление ответов на запросы-сервере:

	Сперва установил пакет:
npm install express-slow-down
	Потом в файле(где-то в начале) server.js добавил постоянную:
const apiLimiter = slowDown({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    delayAfter: 1,              // Allow only one request at full speed
    delayMs: hits => hits * hits * 1000 // Exponential delay
});
	а затем в конце .use(middleware)
app.use('/movies', apiLimiter);