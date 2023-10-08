import { Request, Response } from 'express';
import passport from 'passport';
import User, { IUser } from '../models/user';

async function register(req: Request, res: Response): Promise<void> {
    const { username, email, password, secrets, googleId, facebookId } = req.body;

    const newUser: IUser = new User({
        username,
        email,
        password,
        secrets: [], // Initialize secrets as an empty array
        googleId,
        facebookId
    });

    try {
        const registeredUser = await User.register(newUser, password, (err, account) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }

            passport.authenticate("local")(req, res, () => {
                res.status(200).send('Registration successful');
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

function login(req: Request, res: Response): void {
    passport.authenticate('local', (err: Error, user: any) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else if (!user) {
            // User authentication failed
            // send to login page again saying user does not exist or something like that
            res.status(401).send('Authentication failed');
        } else {
            req.login(user, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    // Authentication successful, redirect to a protected route
                    res.status(200).send('Login successful');
                }
            });
        }
    })(req, res);
}

export {
    register,
    login,
};
