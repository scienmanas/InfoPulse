import { createHash } from 'crypto';

const protectRoute = (req, res, next) => {

    // Get the header
    const AUTH_KEY = req.header('auth-token');
    if (!AUTH_KEY) {
        res.status(401).json({ message: "Access Denied" });
        return;
    }

    // Get the Hash
    const HASHED_KEY = process.env.HASHED_KEY;

    // compute hash from header
    let hash = createHash('sha256').update(AUTH_KEY).digest('hex');
    hash = createHash('sha256').update(hash).digest('hex');

    if (hash === HASHED_KEY) {
        next();
    }
    else {
        res.status(401).json({ message: "Access Denied" });
    }
}

export default protectRoute;

