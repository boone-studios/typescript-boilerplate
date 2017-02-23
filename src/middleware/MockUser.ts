export default function MockUser(req, res, next) {
    if (!req.session) {
        req.session = {
            user: {
                id: 1,
                username: 'LeWestopher',
                email: 'wes@boone.io',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        }
    }
    next();
}